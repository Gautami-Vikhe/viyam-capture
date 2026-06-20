import { type PermissionItem } from "../../core/json/permissionsData";

type PermissionsMatrixProps = {
  permissions: PermissionItem[];
  selectedCodes: string[];
  onChange: (codes: string[]) => void;
};

// Fixed columns shown for every module, matching the reference layout.
const ACTION_COLUMNS = ["Add", "View", "Edit", "Delete", "Export"] as const;
type ActionColumn = (typeof ACTION_COLUMNS)[number];

// Maps each permission to the closest matching fixed column based on
// keywords in its code/name. Adjust this mapping if a different
// grouping is preferred (e.g. Submit/Approve/Reject or Manage X
// could be split into their own columns instead).
const mapToColumn = (permission: PermissionItem): ActionColumn | null => {
  const key = `${permission.permissionCode} ${permission.permissionName}`.toLowerCase();

  if (key.includes("create") || key.includes("submit")) return "Add";
  if (key.includes("view")) return "View";
  if (key.includes("edit") || key.includes("approve") || key.includes("manage")) return "Edit";
  if (key.includes("delete") || key.includes("reject")) return "Delete";
  if (key.includes("export") || key.includes("schedule")) return "Export";

  return null;
};

type ModuleRow = {
  module: string;
  cells: Partial<Record<ActionColumn, PermissionItem>>;
};

const buildRows = (permissions: PermissionItem[]): ModuleRow[] => {
  const rowMap = new Map<string, ModuleRow>();

  permissions.forEach((p) => {
    if (!rowMap.has(p.module)) {
      rowMap.set(p.module, { module: p.module, cells: {} });
    }
    const column = mapToColumn(p);
    if (column) {
      rowMap.get(p.module)!.cells[column] = p;
    }
  });

  return Array.from(rowMap.values());
};

const PermissionsMatrix = ({ permissions, selectedCodes, onChange }: PermissionsMatrixProps) => {
  const rows = buildRows(permissions);

  const isChecked = (code: string) => selectedCodes.includes(code);

  const toggle = (code: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedCodes, code]);
    } else {
      onChange(selectedCodes.filter((c) => c !== code));
    }
  };

  return (
    <div className="table-responsive border rounded">
      <table className="table table-bordered mb-0 align-middle">
        <thead>
          <tr className="table-light">
            <th style={{ width: "200px" }}>Module</th>
            {ACTION_COLUMNS.map((col) => (
              <th key={col} className="text-center">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.module}>
              <td className="fw-semibold">{row.module}</td>
              {ACTION_COLUMNS.map((col) => {
                const permission = row.cells[col];
                if (!permission) {
                  return (
                    <td key={col} className="text-center text-muted">
                      —
                    </td>
                  );
                }
                return (
                  <td key={col} className="text-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={isChecked(permission.permissionCode)}
                      disabled={!permission.isActive}
                      onChange={(e) => toggle(permission.permissionCode, e.target.checked)}
                      title={permission.description}
                      style={{ cursor: permission.isActive ? "pointer" : "not-allowed" }}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsMatrix;
