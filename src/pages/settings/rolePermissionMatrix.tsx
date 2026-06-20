import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import { permissionsData, moduleColors } from "../../core/json/permissionsData";
import { roles, rolePermissionMatrix, updateMatrix } from "../../core/json/rolePermissionStore";

const RolePermissionMatrix = () => {
  const [matrix, setMatrix] = useState<Record<string, string[]>>(rolePermissionMatrix);
  const [search, setSearch] = useState("");
  const [hasChanges, setHasChanges] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const togglePermission = (permissionCode: string, roleCode: string) => {
    setMatrix((prev) => {
      const current = prev[permissionCode] || [];
      const updated = current.includes(roleCode)
        ? current.filter((r) => r !== roleCode)
        : [...current, roleCode];
      return { ...prev, [permissionCode]: updated };
    });
    setHasChanges(true);
  };

  const isChecked = (permissionCode: string, roleCode: string) =>
    (matrix[permissionCode] || []).includes(roleCode);

  const filteredPermissions = permissionsData.filter(
    (p) =>
      p.permissionName.toLowerCase().includes(search.toLowerCase()) ||
      p.permissionCode.toLowerCase().includes(search.toLowerCase()) ||
      p.module.toLowerCase().includes(search.toLowerCase())
  );

  const toggleEntireRole = (roleCode: string) => {
    const allAssigned = filteredPermissions.every((p) =>
      (matrix[p.permissionCode] || []).includes(roleCode)
    );
    setMatrix((prev) => {
      const updated = { ...prev };
      filteredPermissions.forEach((p) => {
        const current = updated[p.permissionCode] || [];
        updated[p.permissionCode] = allAssigned
          ? current.filter((r) => r !== roleCode)
          : [...new Set([...current, roleCode])];
      });
      return updated;
    });
    setHasChanges(true);
  };

  const isRoleFullyChecked = (roleCode: string) =>
    filteredPermissions.length > 0 &&
    filteredPermissions.every((p) => (matrix[p.permissionCode] || []).includes(roleCode));

  const isRolePartiallyChecked = (roleCode: string) =>
    filteredPermissions.some((p) => (matrix[p.permissionCode] || []).includes(roleCode)) &&
    !isRoleFullyChecked(roleCode);

  const grouped = filteredPermissions.reduce((acc, p) => {
    if (!acc[p.module]) acc[p.module] = [];
    acc[p.module].push(p);
    return acc;
  }, {} as Record<string, typeof permissionsData>);

  const handleSave = () => {
    updateMatrix(matrix);
    setHasChanges(false);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  return (
    <>
      {showSavedToast && (
        <div
          className="position-fixed top-0 end-0 m-3 alert alert-success d-flex align-items-center gap-2 shadow"
          style={{ zIndex: 9999 }}
        >
          <i className="ti ti-circle-check fs-18" />
          Permissions saved! Check Role Details or Permission Details to see the changes.
        </div>
      )}

      <div className="page-wrapper">
        <div className="content">

          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Role Permission Matrix</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.roleList}>Roles</Link>
                </li>
                <li className="breadcrumb-item active">Permission Matrix</li>
              </ol>
            </div>
            <Link
              to={all_routes.roleList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Roles
            </Link>
          </div>

          <div className="card mb-0">
            <div className="card-header d-flex align-items-center gap-2 justify-content-between flex-wrap">

              <div className="input-icon-start position-relative" style={{ width: "280px" }}>
                <span className="input-icon-addon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search permissions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <button
                className="btn btn-primary d-inline-flex align-items-center gap-1"
                onClick={handleSave}
                disabled={!hasChanges}
              >
                <i className="ti ti-device-floppy me-1" />
                {hasChanges ? "Save Changes" : "Saved"}
              </button>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered mb-0" style={{ minWidth: "900px" }}>
                  <thead className="table-light">
                    <tr>
                      <th style={{ minWidth: "260px" }}>Permission</th>
                      {roles.map((r) => (
                        <th key={r.code} className="text-center" style={{ minWidth: "120px" }}>
                          <div className="d-flex flex-column align-items-center gap-1">
                            <span className="fs-13 fw-semibold">{r.name}</span>
                            <input
                              type="checkbox"
                              className="form-check-input mt-0"
                              checked={isRoleFullyChecked(r.code)}
                              ref={(el) => {
                                if (el) el.indeterminate = isRolePartiallyChecked(r.code);
                              }}
                              onChange={() => toggleEntireRole(r.code)}
                              style={{ width: "16px", height: "16px", cursor: "pointer" }}
                            />
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(grouped).length > 0 ? (
                      Object.entries(grouped).map(([module, perms]) => (
                        <React.Fragment key={module}>
                          <tr>
                            <td colSpan={roles.length + 1} className="bg-light py-2">
                              <span className={`badge ${moduleColors[module] || "badge-soft-secondary"} fs-12 px-3 py-1`}>
                                <i className="ti ti-layout-grid me-1" />
                                {module}
                              </span>
                            </td>
                          </tr>
                          {perms.map((p) => (
                            <tr key={p.permissionCode}>
                              <td>
                                <h6 className="fs-14 mb-0 fw-medium">{p.permissionName}</h6>
                                <small className="text-muted fs-11">{p.permissionCode}</small>
                              </td>
                              {roles.map((r) => (
                                <td key={r.code} className="text-center">
                                  <input
                                    type="checkbox"
                                    className="form-check-input mt-0"
                                    checked={isChecked(p.permissionCode, r.code)}
                                    onChange={() => togglePermission(p.permissionCode, r.code)}
                                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </React.Fragment>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={roles.length + 1} className="text-center py-4 text-muted">
                          No permissions found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default RolePermissionMatrix;