import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../../components/image-with-base-path";
import * as XLSX from "xlsx";

const AllDoctorsList = () => {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterGender, setFilterGender] = useState("All");
  const [sortLastName, setSortLastName] = useState(false);

  const providers = [
    { name: "Dr. Andrew Clark", dept: "Anaesthesiology", qual: "MBBS", exp: "4+ years", appts: 200, gender: "Male", img: "assets/img/doctors/doctor-01.jpg" },
    { name: "Dr. Katherine Brooks", dept: "Dental Surgery", qual: "MDS", exp: "3+ years", appts: 350, gender: "Female", img: "assets/img/doctors/doctor-02.jpg" },
    { name: "Dr. Benjamin Harris", dept: "Dermatology", qual: "MS", exp: "6+ years", appts: 400, gender: "Male", img: "assets/img/doctors/doctor-03.jpg" },
    { name: "Dr. Laura Mitchell", dept: "ENT Surgery", qual: "MBBS", exp: "2+ years", appts: 150, gender: "Female", img: "assets/img/doctors/doctor-04.jpg" },
    { name: "Dr. Christopher Lewis", dept: "General Medicine", qual: "MS", exp: "3+ years", appts: 380, gender: "Male", img: "assets/img/doctors/doctor-05.jpg" },
    { name: "Dr. Natalie Foster", dept: "Ophthalmology", qual: "MBBS", exp: "2+ years", appts: 450, gender: "Female", img: "assets/img/doctors/doctor-06.jpg" },
    { name: "Dr. Jonathan Adams", dept: "Orthopaedics", qual: "MS", exp: "3+ years", appts: 330, gender: "Male", img: "assets/img/doctors/doctor-07.jpg" },
    { name: "Dr. Rebecca Scott", dept: "Pediatrics", qual: "MBBS", exp: "4+ years", appts: 270, gender: "Female", img: "assets/img/doctors/doctor-08.jpg" },
    { name: "Dr. Samuel Turner", dept: "Radiology", qual: "MS", exp: "4+ years", appts: 510, gender: "Male", img: "assets/img/doctors/doctor-09.jpg" },
    { name: "Dr. Victoria Evans", dept: "Cardiology", qual: "MBBS", exp: "3+ years", appts: 480, gender: "Female", img: "assets/img/doctors/doctor-10.jpg" },
  ];

  const getLastName = (name: string) => name.trim().split(" ").pop() ?? "";

  const filtered = providers
    .filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesGender = filterGender === "All" || p.gender === filterGender;
      return matchesSearch && matchesGender;
    })
    .sort((a, b) =>
      sortLastName ? getLastName(a.name).localeCompare(getLastName(b.name)) : 0
    );

  const handleExportExcel = () => {
    const exportData = filtered.map((p, idx) => ({
      "S.No": idx + 1,
      "Provider Name": p.name,
      "Department": p.dept,
      "Qualification": p.qual,
      "Experience": p.exp,
      "Total Appointments": p.appts,
      "Gender": p.gender,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    worksheet["!cols"] = [
      { wch: 6 }, { wch: 24 }, { wch: 20 },
      { wch: 16 }, { wch: 14 }, { wch: 20 }, { wch: 10 },
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Providers");
    XLSX.writeFile(workbook, "Viyam_Providers.xlsx");
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Providers</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Providers</li>
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
                  placeholder="Search providers..."
                  value={searchInput}
                  onChange={(e) => { setSearchInput(e.target.value); setSearch(e.target.value); }}
                  onKeyDown={(e) => { if (e.key === "Enter") setSearch(searchInput); }}
                />
              </div>

              {/* Right: Filter + Export + Add Provider */}
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
                        className={`dropdown-item rounded-1 ${sortLastName ? "active" : ""}`}
                        onClick={() => setSortLastName(!sortLastName)}
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

                {/* Add Provider */}
                <Link to={all_routes.addDoctors} className="btn btn-primary">
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add Provider
                </Link>

              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive table-nowrap">
                <table className="table mb-0 border">
                  <thead className="table-light">
                    <tr>
                      <th>Provider Name</th>
                      <th>Department</th>
                      <th>Qualification</th>
                      <th>Experience</th>
                      <th>Total Appointments</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length > 0 ? (
                      filtered.map((p, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to={all_routes.doctorDetails} className="avatar avatar-xs me-2">
                                <ImageWithBasePath src={p.img} alt="provider" className="rounded" />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-0 fw-medium">
                                  <Link to={all_routes.doctorDetails}>{p.name}</Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>{p.dept}</td>
                          <td>{p.qual}</td>
                          <td>{p.exp}</td>
                          <td>{p.appts}</td>
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
                                <Link to={all_routes.doctorDetails} className="dropdown-item d-flex align-items-center">
                                  <i className="ti ti-eye me-1" /> View Details
                                </Link>
                              </li>
                              <li>
                                <Link to={all_routes.editDoctors} className="dropdown-item d-flex align-items-center">
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
                          No providers found.
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

export default AllDoctorsList;