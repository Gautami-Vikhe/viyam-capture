import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import * as XLSX from "xlsx";

const FacilityList = () => {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterState, setFilterState] = useState("All");
  const [sortLastName, setSortLastName] = useState(false);

  const facilities = [
    { id: "FC001", name: "City Medical Center", ehrSystem: "Epic", address: "123 Main St", city: "New York", state: "NY", contact: "+1 212-555-0101" },
    { id: "FC002", name: "Downtown Health Clinic", ehrSystem: "Cerner", address: "456 Broadway Ave", city: "Los Angeles", state: "CA", contact: "+1 310-555-0192" },
    { id: "FC003", name: "Sunrise Hospital", ehrSystem: "Meditech", address: "789 Sunrise Blvd", city: "Chicago", state: "IL", contact: "+1 312-555-0143" },
    { id: "FC004", name: "Green Valley Medical", ehrSystem: "Athenahealth", address: "321 Valley Rd", city: "Houston", state: "TX", contact: "+1 713-555-0174" },
    { id: "FC005", name: "Lakeside Wellness Center", ehrSystem: "Epic", address: "654 Lake Dr", city: "Phoenix", state: "AZ", contact: "+1 602-555-0165" },
    { id: "FC006", name: "Northside Family Practice", ehrSystem: "Cerner", address: "987 North Blvd", city: "Philadelphia", state: "PA", contact: "+1 215-555-0186" },
    { id: "FC007", name: "Westview Urgent Care", ehrSystem: "Meditech", address: "147 West Ave", city: "San Antonio", state: "TX", contact: "+1 210-555-0127" },
    { id: "FC008", name: "Eastgate Specialty Clinic", ehrSystem: "Athenahealth", address: "258 East St", city: "San Diego", state: "CA", contact: "+1 619-555-0138" },
    { id: "FC009", name: "Riverside Community Hospital", ehrSystem: "Epic", address: "369 River Rd", city: "Dallas", state: "TX", contact: "+1 214-555-0149" },
    { id: "FC010", name: "Summit Health Institute", ehrSystem: "Cerner", address: "741 Summit Way", city: "San Jose", state: "CA", contact: "+1 408-555-0110" },
  ];

  const states = ["All", ...Array.from(new Set(facilities.map((f) => f.state))).sort()];

  const filtered = facilities
    .filter((f) => {
      const matchSearch =
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.city.toLowerCase().includes(search.toLowerCase()) ||
        f.ehrSystem.toLowerCase().includes(search.toLowerCase());
      const matchState = filterState === "All" || f.state === filterState;
      return matchSearch && matchState;
    })
    .sort((a, b) => sortLastName ? a.name.localeCompare(b.name) : 0);

  const handleExportExcel = () => {
    const exportData = filtered.map((f, idx) => ({
      "S.No": idx + 1,
      "Facility Name": f.name,
      "EHR System": f.ehrSystem,
      "Address": f.address,
      "City": f.city,
      "State": f.state,
      "Contact": f.contact,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    worksheet["!cols"] = [
      { wch: 6 }, { wch: 28 }, { wch: 16 },
      { wch: 24 }, { wch: 16 }, { wch: 8 }, { wch: 18 },
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Facilities");
    XLSX.writeFile(workbook, "Viyam_Facilities.xlsx");
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Facility</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Facility</li>
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
                  placeholder="Search facilities..."
                  value={searchInput}
                  onChange={(e) => { setSearchInput(e.target.value); setSearch(e.target.value); }}
                  onKeyDown={(e) => { if (e.key === "Enter") setSearch(searchInput); }}
                />
              </div>

              {/* Right: Filter + Export + Add Facility */}
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
                    {filterState !== "All" && (
                      <span className="badge bg-primary ms-2 fs-11">{filterState}</span>
                    )}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-2" style={{ minWidth: "180px" }}>
                    <li className="px-2 mb-2">
                      <small className="text-muted fw-medium">Filter by State</small>
                    </li>
                    {states.map((s) => (
                      <li key={s}>
                        <Link
                          to="#"
                          className={`dropdown-item rounded-1 ${filterState === s ? "active" : ""}`}
                          onClick={() => setFilterState(s)}
                        >
                          {s}
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
                        Name (A–Z)
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

                {/* Add Facility */}
                <Link to={all_routes.addFacility} className="btn btn-primary">
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add Facility
                </Link>

              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive table-nowrap">
                <table className="table mb-0 border">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>EHR System</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Contact</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length > 0 ? (
                      filtered.map((f) => (
                        <tr key={f.id}>
                          <td>
                            <h6 className="fs-14 mb-0 fw-medium">{f.name}</h6>
                          </td>
                          <td>
                            <span className="badge badge-soft-primary">{f.ehrSystem}</span>
                          </td>
                          <td>{f.address}</td>
                          <td>{f.city}</td>
                          <td>{f.state}</td>
                          <td>{f.contact}</td>
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
                                <Link to={all_routes.facilityDetails} className="dropdown-item d-flex align-items-center">
                                  <i className="ti ti-eye me-1" /> View Details
                                </Link>
                              </li>
                              <li>
                                <Link to={all_routes.editFacility} className="dropdown-item d-flex align-items-center">
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
                          No facilities found.
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

export default FacilityList;