import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import * as XLSX from "xlsx";
import { permissionsData, moduleColors } from "../../core/json/permissionsData";

const PermissionList = () => {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterModule, setFilterModule] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const modules = ["All", ...Array.from(new Set(permissionsData.map((p) => p.module)))];

  const filtered = permissionsData
    .filter((p) => {
      const matchesSearch =
        p.permissionCode.toLowerCase().includes(search.toLowerCase()) ||
        p.permissionName.toLowerCase().includes(search.toLowerCase()) ||
        p.module.toLowerCase().includes(search.toLowerCase());
      const matchesModule = filterModule === "All" || p.module === filterModule;
      const matchesStatus =
        filterStatus === "All" ||
        (filterStatus === "Active" && p.isActive) ||
        (filterStatus === "Inactive" && !p.isActive);
      return matchesSearch && matchesModule && matchesStatus;
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === "asc"
        ? a.permissionName.localeCompare(b.permissionName)
        : b.permissionName.localeCompare(a.permissionName);
    });

  const handleExportExcel = () => {
    const exportData = filtered.map((p, idx) => ({
      "S.No": idx + 1,
      "Permission Code": p.permissionCode,
      "Permission Name": p.permissionName,
      "Module": p.module,
      "Description": p.description || "-",
      "Status": p.isActive ? "Active" : "Inactive",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    worksheet["!cols"] = [
      { wch: 6 }, { wch: 28 }, { wch: 28 },
      { wch: 18 }, { wch: 40 }, { wch: 12 },
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Permissions");
    XLSX.writeFile(workbook, "Viyam_Permissions.xlsx");
  };

  const toggleSort = () => {
    setSortOrder((prev) =>
      prev === null ? "asc" : prev === "asc" ? "desc" : null
    );
  };

  // Group by module for display
  const grouped = filtered.reduce((acc, p) => {
    if (!acc[p.module]) acc[p.module] = [];
    acc[p.module].push(p);
    return acc;
  }, {} as Record<string, typeof permissionsData>);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Permissions</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Permissions</li>
              </ol>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-header d-flex align-items-center gap-2 justify-content-between flex-wrap">

              {/* Search */}
              <div className="input-icon-start position-relative" style={{ width: "260px" }}>
                <span className="input-icon-addon">
                  <i className="ti ti-search" style={{ cursor: "pointer" }} onClick={() => setSearch(searchInput)} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search permissions..."
                  value={searchInput}
                  onChange={(e) => { setSearchInput(e.target.value); setSearch(e.target.value); }}
                  onKeyDown={(e) => { if (e.key === "Enter") setSearch(searchInput); }}
                />
              </div>

              {/* Right actions */}
              <div className="d-flex align-items-center gap-2">

                {/* Filter */}
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-filter me-1" />
                    Filter
                    {(filterModule !== "All" || filterStatus !== "All") && (
                      <span className="badge bg-primary ms-2 fs-11">•</span>
                    )}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-2" style={{ minWidth: "200px" }}>
                    <li className="px-2 mb-2">
                      <small className="text-muted fw-medium">Filter by Module</small>
                    </li>
                    {modules.map((m) => (
                      <li key={m}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${filterModule === m ? "active" : ""}`}
                          onClick={() => setFilterModule(m)}
                        >
                          {m}
                        </Link>
                      </li>
                    ))}
                    <li><hr className="dropdown-divider" /></li>
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

                {/* Export */}
                <button
                  className="btn btn-outline-success d-inline-flex align-items-center"
                  onClick={handleExportExcel}
                >
                  <i className="ti ti-file-spreadsheet me-1" />
                  Export
                </button>

                {/* Add Permission */}
                <Link to={all_routes.addPermission} className="btn btn-primary">
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add Permission
                </Link>

              </div>
            </div>

            <div className="card-body">
              {Object.keys(grouped).length > 0 ? (
                Object.entries(grouped).map(([module, perms]) => (
                  <div key={module} className="mb-4">
                    {/* Module heading */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className={`badge ${moduleColors[module] || "badge-soft-secondary"} fs-12 px-3 py-2`}>
                        <i className="ti ti-layout-grid me-1" />
                        {module}
                      </span>
                      <span className="text-muted fs-12">
                        {perms.length} permission{perms.length !== 1 ? "s" : ""}
                      </span>
                    </div>

                    <div className="table-responsive table-nowrap">
                      <table className="table mb-0 border">
                        <thead className="table-light">
                          <tr>
                            <th>Permission Code</th>
                            <th
                              style={{ cursor: "pointer", userSelect: "none" }}
                              onClick={toggleSort}
                            >
                              <div className="d-flex align-items-center gap-2">
                                Permission Name
                                {sortOrder === null && <i className="ti ti-arrows-sort text-muted" style={{ fontSize: "15px" }} />}
                                {sortOrder === "asc" && <i className="ti ti-sort-ascending text-primary" style={{ fontSize: "15px" }} />}
                                {sortOrder === "desc" && <i className="ti ti-sort-descending text-primary" style={{ fontSize: "15px" }} />}
                              </div>
                            </th>
                            <th>Description</th>
                            <th>Status</th>
                            <th className="no-sort" />
                          </tr>
                        </thead>
                        <tbody>
                          {perms.map((p, idx) => (
                            <tr key={idx}>
                              <td>
                                <span className="badge bg-light text-dark border fs-12 fw-medium">
                                  {p.permissionCode}
                                </span>
                              </td>
                              <td>
                                <h6 className="fs-14 mb-0 fw-medium">{p.permissionName}</h6>
                              </td>
                              <td className="text-muted fs-13">{p.description || "-"}</td>
                              <td>
                                <span className={`badge ${p.isActive ? "badge-soft-success" : "badge-soft-danger"}`}>
                                  {p.isActive ? "Active" : "Inactive"}
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
                                  <li>
                                    <Link
                                      to={`/permission-details/${p.permissionCode}`}
                                      className="dropdown-item d-flex align-items-center"
                                    >
                                      <i className="ti ti-eye me-1" /> View Details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={all_routes.editPermission} className="dropdown-item d-flex align-items-center">
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
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-muted">
                  No permissions found.
                </div>
              )}
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
              <p className="mb-3">Are you sure you want to delete this permission?</p>
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

export default PermissionList;