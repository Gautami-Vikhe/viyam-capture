import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import * as XLSX from "xlsx";

const UserList = () => {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const users = [
    { name: "Sarah Johnson", username: "sarah.johnson", email: "sarah.johnson@example.com", contact: "+1 75964 25493", role: "Admin" },
    { name: "Michael Reed", username: "michael.reed", email: "michael.reed@example.com", contact: "+1 89564 31022", role: "Provider" },
    { name: "Emily Carter", username: "emily.carter", email: "emily.carter@example.com", contact: "+1 65789 22341", role: "Biller" },
    { name: "James Walker", username: "james.walker", email: "james.walker@example.com", contact: "+1 70234 88761", role: "Receptionist" },
    { name: "Olivia Brooks", username: "olivia.brooks", email: "olivia.brooks@example.com", contact: "+1 91234 56780", role: "Receptionist" },
  ];

  const filtered = users
    .filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.username.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchesRole = filterRole === "All" || u.role === filterRole;
      return matchesSearch && matchesRole;
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

  const handleExportExcel = () => {
    const exportData = filtered.map((u, idx) => ({
      "S.No": idx + 1,
      "Full Name": u.name,
      "Username": u.username,
      "Email Address": u.email,
      "Contact Number": u.contact,
      "Role": u.role,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Column widths
    worksheet["!cols"] = [
      { wch: 6 },
      { wch: 22 },
      { wch: 20 },
      { wch: 32 },
      { wch: 20 },
      { wch: 16 },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "Viyam_Users.xlsx");
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
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Users</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Users</li>
              </ol>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-header d-flex align-items-center gap-2 justify-content-between flex-wrap">

              {/* Left: Search Bar */}
              <div className="input-icon-start position-relative" style={{ width: "260px" }}>
                <span className="input-icon-addon">
                  <i
                    className="ti ti-search"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSearch(searchInput)}
                  />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search users..."
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setSearch(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setSearch(searchInput);
                  }}
                />
              </div>

              {/* Right: Filter + Export + Add User */}
              <div className="d-flex align-items-center gap-2">

                {/* Filter by Role */}
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="ti ti-filter me-1" />
                    Filter
                    {filterRole !== "All" && (
                      <span className="badge bg-primary ms-2 fs-11">{filterRole}</span>
                    )}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-2" style={{ minWidth: "180px" }}>
                    <li className="px-2 mb-2">
                      <small className="text-muted fw-medium">Filter by Role</small>
                    </li>
                    {["All", "Admin", "Provider", "Biller", "Receptionist"].map((r) => (
                      <li key={r}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${filterRole === r ? "active" : ""}`}
                          onClick={() => setFilterRole(r)}
                        >
                          {r}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Export to Excel */}
                <button
                  className="btn btn-outline-success d-inline-flex align-items-center gap-1"
                  onClick={handleExportExcel}
                >
                  <i className="ti ti-file-spreadsheet me-1" />
                  Export
                </button>

                {/* Add User */}
                <Link to={all_routes.addUser} className="btn btn-primary">
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add User
                </Link>

              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive table-nowrap">
                <table className="table mb-0 border">
                  <thead className="table-light">
                    <tr>
                      <th
                        style={{ cursor: "pointer", userSelect: "none" }}
                        onClick={toggleSort}
                      >
                        <div className="d-flex align-items-center gap-2">
                          User Name
                          {sortOrder === null && (
                            <i className="ti ti-arrows-sort text-muted" style={{ fontSize: "15px" }} />
                          )}
                          {sortOrder === "asc" && (
                            <i className="ti ti-sort-ascending text-primary" style={{ fontSize: "15px" }} />
                          )}
                          {sortOrder === "desc" && (
                            <i className="ti ti-sort-descending text-primary" style={{ fontSize: "15px" }} />
                          )}
                        </div>
                      </th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Contact Number</th>
                      <th>Role</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length > 0 ? (
                      filtered.map((u, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-xs me-2">
                                <span className="avatar-title bg-primary-transparent text-primary rounded-circle">
                                  <i className="ti ti-user fs-14" />
                                </span>
                              </span>
                              <div>
                                <h6 className="fs-14 mb-0 fw-medium">{u.name}</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text-muted">{u.username}</td>
                          <td>{u.email}</td>
                          <td>{u.contact}</td>
                          <td>
                            <span className={`badge ${
                              u.role === "Admin" ? "badge-soft-danger" :
                              u.role === "Provider" ? "badge-soft-primary" :
                              u.role === "Biller" ? "badge-soft-warning" :
                              "badge-soft-success"
                            }`}>
                              {u.role}
                            </span>
                          </td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="btn btn-icon btn-outline-light"
                              data-bs-toggle="dropdown"
                              aria-label="more options"
                            >
                              <i className="ti ti-dots-vertical" aria-hidden="true" />
                            </Link>
                            <ul className="dropdown-menu p-2">
                              <li>
                                <Link to={all_routes.userDetails} className="dropdown-item d-flex align-items-center">
                                  <i className="ti ti-eye me-1" /> View Details
                                </Link>
                              </li>
                              <li>
                                <Link to={all_routes.editUser} className="dropdown-item d-flex align-items-center">
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
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center py-3 text-muted">
                          No users found.
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
              <p className="mb-3">Are you sure you want to delete?</p>
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

export default UserList;