import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import * as XLSX from "xlsx";

const superbills = [
  { id: "SB001", providerName: "Dr. Andrew Clark", patientName: "John Doe", dateOfService: "06/10/2025", cptCode: "99213", icdCode: "J06.9", status: "Completed" },
  { id: "SB002", providerName: "Dr. Katherine Brooks", patientName: "Mary Smith", dateOfService: "06/12/2025", cptCode: "99214", icdCode: "I10", status: "Pending" },
  { id: "SB003", providerName: "Dr. Benjamin Harris", patientName: "Robert Johnson", dateOfService: "06/15/2025", cptCode: "99203", icdCode: "E11.9", status: "Pending" },
  { id: "SB004", providerName: "Dr. Laura Mitchell", patientName: "Linda Williams", dateOfService: "06/17/2025", cptCode: "99215", icdCode: "M54.5", status: "Completed" },
  { id: "SB005", providerName: "Dr. Christopher Lewis", patientName: "Michael Brown", dateOfService: "06/18/2025", cptCode: "99212", icdCode: "J45.909", status: "Pending" },
  { id: "SB006", providerName: "Dr. Natalie Foster", patientName: "Patricia Davis", dateOfService: "06/20/2025", cptCode: "99204", icdCode: "F32.9", status: "Pending" },
  { id: "SB007", providerName: "Dr. Jonathan Adams", patientName: "James Wilson", dateOfService: "06/21/2025", cptCode: "99213", icdCode: "K21.0", status: "Completed" },
  { id: "SB008", providerName: "Dr. Rebecca Scott", patientName: "Barbara Moore", dateOfService: "06/22/2025", cptCode: "99214", icdCode: "N39.0", status: "Pending" },
  { id: "SB009", providerName: "Dr. Samuel Turner", patientName: "Charles Taylor", dateOfService: "06/23/2025", cptCode: "99205", icdCode: "I25.10", status: "Pending" },
  { id: "SB010", providerName: "Dr. Victoria Evans", patientName: "Dorothy Anderson", dateOfService: "06/24/2025", cptCode: "99203", icdCode: "G43.909", status: "Completed" },
];

const ESuperbillList = () => {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterProvider, setFilterProvider] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortLastName, setSortLastName] = useState(false);

  const providers = ["All", ...Array.from(new Set(superbills.map((s) => s.providerName)))];
  const statuses = ["All", "Pending", "Completed"];

  const getLastName = (name: string) => name.trim().split(" ").pop() ?? "";

  const filtered = superbills
    .filter((s) => {
      const matchSearch =
        s.providerName.toLowerCase().includes(search.toLowerCase()) ||
        s.patientName.toLowerCase().includes(search.toLowerCase()) ||
        s.cptCode.toLowerCase().includes(search.toLowerCase()) ||
        s.icdCode.toLowerCase().includes(search.toLowerCase());
      const matchProvider = filterProvider === "All" || s.providerName === filterProvider;
      const matchStatus = filterStatus === "All" || s.status === filterStatus;
      return matchSearch && matchProvider && matchStatus;
    })
    .sort((a, b) =>
      sortLastName ? getLastName(a.patientName).localeCompare(getLastName(b.patientName)) : 0
    );

  const handleExportExcel = () => {
    const exportData = filtered.map((s, idx) => ({
      "S.No": idx + 1,
      "Superbill ID": s.id,
      "Provider Name": s.providerName,
      "Patient Name": s.patientName,
      "Date of Service": s.dateOfService,
      "Status": s.status,
      "CPT Code": s.cptCode,
      "ICD Code": s.icdCode,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    worksheet["!cols"] = [
      { wch: 6 }, { wch: 12 }, { wch: 24 },
      { wch: 22 }, { wch: 16 }, { wch: 12 }, { wch: 12 }, { wch: 12 },
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "eSuperbills");
    XLSX.writeFile(workbook, "Viyam_eSuperbills.xlsx");
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-1 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-0">E-Superbills</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">E-Superbills</li>
              </ol>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-header d-flex align-items-center gap-2 justify-content-between flex-wrap py-2">

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
                  placeholder="Search superbills..."
                  value={searchInput}
                  onChange={(e) => { setSearchInput(e.target.value); setSearch(e.target.value); }}
                  onKeyDown={(e) => { if (e.key === "Enter") setSearch(searchInput); }}
                />
              </div>

              {/* Right: Filter + Export + Add eSuperbill */}
              <div className="d-flex align-items-center gap-2">

                {/* Filter Dropdown */}
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-md btn-outline-light d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-filter me-1" />
                    Filter
                    {(filterProvider !== "All" || filterStatus !== "All") && (
                      <span className="badge bg-primary ms-2 fs-11">•</span>
                    )}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-2" style={{ minWidth: "220px" }}>
                    <li className="px-2 mb-2">
                      <small className="text-muted fw-medium">Filter by Status</small>
                    </li>
                    {statuses.map((s) => (
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
                    <li><hr className="dropdown-divider" /></li>
                    <li className="px-2 mb-2">
                      <small className="text-muted fw-medium">Filter by Provider</small>
                    </li>
                    {providers.map((p) => (
                      <li key={p}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${filterProvider === p ? "active" : ""}`}
                          onClick={() => setFilterProvider(p)}
                        >
                          {p}
                        </Link>
                      </li>
                    ))}
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <Link
                        to="#"
                        className={`dropdown-item rounded-1 ${sortLastName ? "active" : ""}`}
                        onClick={() => setSortLastName(!sortLastName)}
                      >
                        Last Name (Patient)
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Export */}
                <button
                  className="btn btn-outline-success d-inline-flex align-items-center gap-1"
                  onClick={handleExportExcel}
                >
                  <i className="ti ti-file-spreadsheet me-1" />
                  Export
                </button>

                {/* Add eSuperbill */}
                <Link to={all_routes.addSuperbill} className="btn btn-primary">
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add E-Superbill
                </Link>

              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive table-nowrap">
                <table className="table mb-0 border">
                  <thead className="table-light">
                    <tr>
                      <th style={{ padding: "10px 16px" }}>Provider Name</th>
                      <th style={{ padding: "10px 16px" }}>Patient Name</th>
                      <th style={{ padding: "10px 16px" }}>Date of Service</th>
                      <th style={{ padding: "10px 16px" }}>Status</th>
                      <th style={{ padding: "10px 16px" }}>CPT Code</th>
                      <th style={{ padding: "10px 16px" }}>ICD Code</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length > 0 ? (
                      filtered.map((s) => (
                        <tr key={s.id}>
                          <td style={{ padding: "6px 16px" }}>
                            <h6 className="fs-14 mb-0 fw-medium">{s.providerName}</h6>
                          </td>
                          <td style={{ padding: "6px 16px" }}>
                            <h6 className="fs-14 mb-0 fw-medium">{s.patientName}</h6>
                          </td>
                          <td className="fs-13" style={{ padding: "6px 16px" }}>{s.dateOfService}</td>
                          <td style={{ padding: "6px 16px" }}>
                            <span className={`badge ${s.status === "Completed" ? "badge-soft-success" : "badge-soft-warning"} d-inline-flex align-items-center gap-1`}>
                              <i className={`ti ${s.status === "Completed" ? "ti-circle-check" : "ti-clock"} fs-12`} />
                              {s.status}
                            </span>
                          </td>
                          <td style={{ padding: "6px 16px" }}>
                            <span className="badge badge-soft-primary fs-12">{s.cptCode}</span>
                          </td>
                          <td style={{ padding: "6px 16px" }}>
                            <span className="badge badge-soft-warning fs-12">{s.icdCode}</span>
                          </td>
                          <td className="text-end" style={{ padding: "6px 16px" }}>
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
                                  to={all_routes.eSuperbillDetails}
                                  className="dropdown-item d-flex align-items-center"
                                >
                                  <i className="ti ti-eye me-1" /> View Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={all_routes.editSuperbill}
                                  className="dropdown-item d-flex align-items-center"
                                >
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
                        <td colSpan={7} className="text-center py-4 text-muted">
                          No superbills found.
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
              <p className="mb-3">Are you sure you want to delete this superbill?</p>
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

export default ESuperbillList;