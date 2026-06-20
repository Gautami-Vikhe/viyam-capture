import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../../components/image-with-base-path";
import { useState } from "react";
import * as XLSX from "xlsx";

const AllPatientsList = () => {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterGender, setFilterGender] = useState("All");
  const [sortBy, setSortBy] = useState("All");

  const patients = [
    { id: "PT0025", name: "James Carter", avatar: "assets/img/avatars/avatar-31.jpg", gender: "Male", provider: "Dr. Andrew Clark", providerImg: "assets/img/doctors/doctor-01.jpg", lastVisit: "17 Jun 2025" },
    { id: "PT0024", name: "Emily Davis", avatar: "assets/img/avatars/avatar-54.jpg", gender: "Female", provider: "Dr. Katherine Brooks", providerImg: "assets/img/doctors/doctor-03.jpg", lastVisit: "10 Jun 2025" },
    { id: "PT0023", name: "Michael Johnson", avatar: "assets/img/avatars/avatar-45.jpg", gender: "Male", provider: "Dr. Benjamin Harris", providerImg: "assets/img/doctors/doctor-04.jpg", lastVisit: "22 May 2025" },
    { id: "PT0022", name: "Olivia Miller", avatar: "assets/img/avatars/avatar-51.jpg", gender: "Female", provider: "Dr. Laura Mitchell", providerImg: "assets/img/doctors/doctor-05.jpg", lastVisit: "15 May 2025" },
    { id: "PT0021", name: "David Smith", avatar: "assets/img/avatars/avatar-41.jpg", gender: "Male", provider: "Dr. Christopher Lewis", providerImg: "assets/img/doctors/doctor-06.jpg", lastVisit: "30 Apr 2025" },
    { id: "PT0020", name: "Sophia Wilson", avatar: "assets/img/avatars/avatar-48.jpg", gender: "Female", provider: "Dr. Natalie Foster", providerImg: "assets/img/doctors/doctor-07.jpg", lastVisit: "25 Apr 2025" },
    { id: "PT0019", name: "Daniel Williams", avatar: "assets/img/avatars/avatar-53.jpg", gender: "Male", provider: "Dr. Jonathan Adams", providerImg: "assets/img/doctors/doctor-10.jpg", lastVisit: "13 Mar 2025" },
    { id: "PT0018", name: "Isabella Anderson", avatar: "assets/img/avatars/avatar-50.jpg", gender: "Female", provider: "Dr. Rebecca Scott", providerImg: "assets/img/doctors/doctor-08.jpg", lastVisit: "16 Feb 2025" },
    { id: "PT0017", name: "William Brown", avatar: "assets/img/avatars/avatar-42.jpg", gender: "Male", provider: "Dr. Samuel Turner", providerImg: "assets/img/doctors/doctor-12.jpg", lastVisit: "20 Jan 2025" },
    { id: "PT0016", name: "Charlotte Taylor", avatar: "assets/img/avatars/avatar-56.jpg", gender: "Female", provider: "Dr. Victoria Evans", providerImg: "assets/img/doctors/doctor-11.jpg", lastVisit: "15 Jan 2025" },
  ];

  const filteredPatients = patients
    .filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchGender = filterGender === "All" || p.gender === filterGender;
      return matchSearch && matchGender;
    })
    .sort((a, b) => {
      const lastNameA = a.name.split(" ").slice(-1)[0];
      const lastNameB = b.name.split(" ").slice(-1)[0];
      return sortBy === "Last Name"
        ? lastNameA.localeCompare(lastNameB)
        : 0;
    });

  const handleExportExcel = () => {
    const exportData = filteredPatients.map((p, idx) => ({
      "S.No": idx + 1,
      "Patient ID": p.id,
      "Patient Name": p.name,
      "Gender": p.gender,
      "Provider": p.provider,
      "Last Visit": p.lastVisit,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    worksheet["!cols"] = [
      { wch: 6 }, { wch: 10 }, { wch: 22 },
      { wch: 10 }, { wch: 24 }, { wch: 16 },
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Patients");
    XLSX.writeFile(workbook, "Viyam_Patients.xlsx");
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Patients</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Patients</li>
              </ol>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-header d-flex align-items-center gap-2 justify-content-between flex-wrap">

              {/* Left: Search Bar */}
              <div className="input-icon-start position-relative" style={{ width: "260px" }}>
                <span className="input-icon-addon">
                  <i className="ti ti-search" style={{ cursor: "pointer" }} onClick={() => setSearch(searchInput)} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search patients..."
                  value={searchInput}
                  onChange={(e) => { setSearchInput(e.target.value); setSearch(e.target.value); }}
                  onKeyDown={(e) => { if (e.key === "Enter") setSearch(searchInput); }}
                />
              </div>

              {/* Right: Filter + Export + Add Patient */}
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
                    {filterGender !== "All" && (
                      <span className="badge bg-primary ms-2 fs-11">{filterGender}</span>
                    )}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-2" style={{ minWidth: "180px" }}>
                    <li className="px-2 mb-2">
                      <small className="text-muted fw-medium">Filter by Gender</small>
                    </li>
                    {["All", "Male", "Female"].map((g) => (
                      <li key={g}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${filterGender === g ? "active" : ""}`}
                          onClick={() => setFilterGender(g)}
                        >
                          {g}
                        </Link>
                      </li>
                    ))}
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <Link
                        to="#"
                        className={`dropdown-item rounded-1 ${sortBy === "Last Name" ? "active" : ""}`}
                        onClick={() => setSortBy(sortBy === "Last Name" ? "All" : "Last Name")}
                      >
                        Last Name
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

                {/* Add Patient */}
                <Link to={all_routes.addPatient} className="btn btn-primary">
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add Patient
                </Link>

              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive table-nowrap">
                <table className="table mb-0 border">
                  <thead className="table-light">
                    <tr>
                      <th>Patient Name</th>
                      <th>Gender</th>
                      <th>Provider Name</th>
                      <th>Last Visit</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.length > 0 ? (
                      filteredPatients.map((patient) => (
                        <tr key={patient.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to={all_routes.patientDetails} className="avatar avatar-xs me-2">
                                <ImageWithBasePath src={patient.avatar} alt="patient" className="rounded" />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-0 fw-medium">
                                  <Link to={all_routes.patientDetails}>{patient.name}</Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>{patient.gender}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to={all_routes.doctorDetails} className="avatar avatar-xs me-2">
                                <ImageWithBasePath src={patient.providerImg} alt="provider" className="rounded" />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-0 fw-medium">
                                  <Link to={all_routes.doctorDetails}>{patient.provider}</Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>{patient.lastVisit}</td>
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
                                <Link to={all_routes.patientDetails} className="dropdown-item d-flex align-items-center">
                                  <i className="ti ti-eye me-1" /> View Details
                                </Link>
                              </li>
                              <li>
                                <Link to={all_routes.editPatient} className="dropdown-item d-flex align-items-center">
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
                        <td colSpan={5} className="text-center py-4 text-muted">
                          No patients found
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

export default AllPatientsList;
