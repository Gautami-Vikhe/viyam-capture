// Patient Search form, based on Patient

import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../../components/image-with-base-path";
import CommonFooter from "../../components/common-footer/commonFooter";


const PatientSearch = () => {

  return (
    <>
      {/* ========================
          Start Page Content
        ========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Patient Search</h4>
              <div className="text-end">
                <ol className="breadcrumb m-0 py-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Patient Search</li>
                </ol>
              </div>
            </div>
            <div className="gap-2 d-flex align-items-center flex-wrap">
              <Link
                to="#"
                className="btn btn-icon btn-white"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Refresh"
                data-bs-original-title="Refresh"
              >
                <i className="ti ti-refresh" />
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-sm-center gap-3 flex-wrap flex-column flex-sm-row">
                <input
                  type="text"
                  className="form-control w-auto"
                  placeholder="Search"
                  defaultValue="James Carter"
                />
                <button type="submit" className="btn btn-lg btn-primary">
                  <i className="ti ti-search me-1" />
                  Search
                </button>
                <button className="btn btn-lg btn-light">
                  <i className="ti ti-circle-x me-1" />
                  Clear Search
                </button>
              </div>
            </div>
          </div>
          <div className="badge-soft-primary p-2 rounded d-none">
            <p className="fs-14 d-sm-inline-flex align-items-center mb-0">
              <i className="ti ti-info-circle me-1" />
              Quickly find patient records by entering basic details.
            </p>
          </div>
          {/* card start */}
          <div className="card mb-0">
            <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
              <h6 className="d-inline-flex align-items-center mb-0">
                Search Result
              </h6>
            </div>
            <div className="card-body">
              {/* table start */}
              <div className="table-responsive table-nowrap">
                <table className="table mb-0 border">
                  <thead className="table-light">
                    <tr>
                      <th>Patient ID</th>
                      <th>Patient Name</th>
                      <th className="no-sort">Gender</th>
                      <th>Last Visit</th>
                      <th className="no-sort">Status</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link to={all_routes.patientDetails}>#PT0025</Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.patientDetails}
                            className="avatar avatar-xs me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/avatars/avatar-31.jpg"
                              alt="patient"
                              className="rounded"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">
                              <Link to={all_routes.patientDetails}>James Carter</Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>Male</td>
                      <td>17 Jun 2025</td>
                      <td>
                        <span className="badge badge-soft-orange">Out Patient</span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          className="btn btn-icon btn-outline-light"
                          data-bs-toggle="dropdown"
                          aria-label="more options"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to={all_routes.patientDetails}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-eye me-1" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={all_routes.editPatient}
                              className="dropdown-item d-flex align-items-center"
                            >
                              <i className="ti ti-edit me-1" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* table end */}
            </div>
          </div>
          {/* card end */}
        </div>
        {/* End Content */}
        {/* Start Footer */}
            <CommonFooter />
        {/* End Footer */}
        
        {/* Start Delete Modal  */}
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
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-white position-relative w-100 me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to={all_routes.patientSearch}
                    className="btn btn-danger position-relative w-100"
                    data-bs-dismiss="modal"
                  >
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Delete Modal  */}

      </div>
      {/* ========================
          End Page Content
        ========================= */}
    </>

  );
};

export default PatientSearch;
