import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import * as XLSX from "xlsx";
import { rolesData } from "../../core/json/rolesData";

const RoleList = () => {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const roles = rolesData;

  const filtered = roles
    .filter((r) => {
      const matchesSearch =
        r.roleCode.toLowerCase().includes(search.toLowerCase()) ||
        r.roleName.toLowerCase().includes(search.toLowerCase()) ||
        (r.description || "").toLowerCase().includes(search.toLowerCase());
      const matchesStatus =
        filterStatus === "All" ||
        (filterStatus === "Active" && r.isActive) ||
        (filterStatus === "Inactive" && !r.isActive);
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === "asc"
        ? a.roleName.localeCompare(b.roleName)
        : b.roleName.localeCompare(a.roleName);
    });

  const handleExportExcel = () => {
    const exportData = filtered.map((r, idx) => ({
      "S.No": idx + 1,
      "Role Code": r.roleCode,
      "Role Name": r.roleName,
      "Description": r.description || "-",
      "System Role": r.isSystemRole ? "Yes" : "No",
      "Status": r.isActive ? "Active" : "Inactive",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    worksheet["!cols"] = [
      { wch: 6 }, { wch: 20 }, { wch: 22 },
      { wch: 35 }, { wch: 14 }, { wch: 12 },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Roles");
    XLSX.writeFile(workbook, "Viyam_Roles.xlsx");
  };

  const toggleSort = () => {
    setSortOrder((prev) =>
      prev === null ? "asc" : prev === "asc" ? "desc" : null
    );
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Roles</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Roles</li>
              </ol>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-header d-flex align-items-center gap-2 justify-content-between flex-wrap">
              <div className="input-icon-start position-relative" style={{ width: "260px" }}>
                <span className="input-icon-addon">
                  <i className="ti ti-search" style={{ cursor: "pointer" }} onClick={() => setSearch(searchInput)} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search roles..."
                  value={searchInput}
                  onChange={(e) => { setSearchInput(e.target.value); setSearch(e.target.value); }}
                  onKeyDown={(e) => { if (e.key === "Enter") setSearch(searchInput); }}
                />
              </div>

              <div className="d-flex align-items-center gap-2">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-filter me-1" />
                    Filter
                    {filterStatus !== "All" && (
                      <span className="badge bg-primary ms-2 fs-11">{filterStatus}</span>
                    )}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-2" style={{ minWidth: "160px" }}>
                    <li className="px-2 mb-2">
                      <small className="text-muted fw-medium">Filter by Status</small>
                    </li>
                    {["All", "Active", "Inactive"].map((s) => (
                      <li key={s}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${filterStatus === s ? "active" : ""}`}
                          onClick={() => setFilterStatus(s)}
                        >
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn btn-outline-success d-inline-flex align-items-center gap-1"
                  onClick={handleExportExcel}
                >
                  <i className="ti ti-file-spreadsheet me-1" />
                  Export
                </button>
                <Link to={all_routes.rolePermissionMatrix} className="btn btn-outline-primary">
                  <i className="ti ti-grid-dots me-1" />
                  Permission Matrix
                </Link>
                <Link to={all_routes.addRole} className="btn btn-primary">
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add Role
                </Link>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive table-nowrap">
                <table className="table mb-0 border">
                  <thead className="table-light">
                    <tr>
                      <th>Role Code</th>
                      <th
                        style={{ cursor: "pointer", userSelect: "none" }}
                        onClick={toggleSort}
                      >
                        <div className="d-flex align-items-center gap-2">
                          Role Name
                          {sortOrder === null && <i className="ti ti-arrows-sort text-muted" style={{ fontSize: "15px" }} />}
                          {sortOrder === "asc" && <i className="ti ti-sort-ascending text-primary" style={{ fontSize: "15px" }} />}
                          {sortOrder === "desc" && <i className="ti ti-sort-descending text-primary" style={{ fontSize: "15px" }} />}
                        </div>
                      </th>
                      <th>Description</th>
                      <th>System Role</th>
                      <th>Status</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length > 0 ? (
                      filtered.map((r, idx) => (
                        <tr key={idx}>
                          <td>
                            <span className="badge bg-light text-dark border fs-12 fw-medium">
                              {r.roleCode}
                            </span>
                          </td>
                          <td>
                            <h6 className="fs-14 mb-0 fw-medium">{r.roleName}</h6>
                          </td>
                          <td className="text-muted fs-13">{r.description || "-"}</td>
                          <td>
                            {r.isSystemRole ? (
                              <span className="badge badge-soft-primary">System</span>
                            ) : (
                              <span className="badge badge-soft-secondary">Custom</span>
                            )}
                          </td>
                          <td>
                            <span className={`badge ${r.isActive ? "badge-soft-success" : "badge-soft-danger"}`}>
                              {r.isActive ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="btn btn-icon btn-outline-light"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu p-2">
                              {/* View Details — available for ALL roles, passes roleCode in URL */}
                              <li>
                                <Link
                                  to={`/role-details/${r.roleCode}`}
                                  className="dropdown-item d-flex align-items-center"
                                >
                                  <i className="ti ti-eye me-1" /> View Details
                                </Link>
                              </li>
                              {/* Edit & Delete — only for custom roles */}
                              {!r.isSystemRole && (
                                <>
                                  <li>
                                    <Link to={all_routes.editRole} className="dropdown-item d-flex align-items-center">
                                      <i className="ti ti-edit me-1" /> Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item d-flex align-items-center text-danger"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="ti ti-trash me-1" /> Delete
                                    </Link>
                                  </li>
                                </>
                              )}
                              {/* Protected label — only for system roles */}
                              {r.isSystemRole && (
                                <li>
                                  <span className="dropdown-item text-muted d-flex align-items-center" style={{ cursor: "not-allowed" }}>
                                    <i className="ti ti-lock me-1" /> Protected
                                  </span>
                                </li>
                              )}
                            </ul>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center py-3 text-muted">
                          No roles found.
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

      {/* Delete Modal */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <div className="mb-2 position-relative z-1">
                <span className="avatar avatar-md bg-danger rounded-circle">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Delete Confirmation</h5>
              <p className="mb-3">Are you sure you want to delete this role?</p>
              <div className="d-flex justify-content-center gap-2">
                <Link to="#" className="btn btn-white position-relative z-1 w-100" data-bs-dismiss="modal">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-danger position-relative z-1 w-100" data-bs-dismiss="modal">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleList;