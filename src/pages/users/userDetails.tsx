import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import CommonFooter from "../../components/common-footer/commonFooter";

const UserDetails = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">User Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.userList}>Users</Link>
                </li>
                <li className="breadcrumb-item active">User Details</li>
              </ol>
            </div>
            <div className="gap-2 d-flex align-items-center flex-wrap">
              <Link
                to={all_routes.userList}
                className="fw-medium d-flex align-items-center"
              >
                <i className="ti ti-arrow-left me-1" />
                Back to Users
              </Link>
            </div>
          </div>

          <div className="row row-gap-4">
            {/* Left Column */}
            <div className="col-xl-4">
              <div className="card shadow mb-0">
                <div className="card-body">
                  {/* User Identity */}
                  <div className="d-flex align-items-center pb-3 mb-3 border-bottom gap-3">
                    <span className="avatar avatar-xxl bg-primary-transparent text-primary rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ti ti-user fs-32" />
                    </span>
                    <div>
                      <h5 className="mb-1 fw-semibold mt-2">
                        <Link to="#">Sarah Johnson</Link>
                      </h5>
                      <p className="fs-13 mb-0">Admin</p>
                    </div>
                  </div>

                  <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i className="ti ti-user-circle me-2 fs-18" />
                    Basic Information
                  </h6>
                  <div className="bg-light rounded p-3">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Username</span>
                      <span className="fs-13">sarah.johnson</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Email</span>
                      <span className="fs-13">sarah.johnson@example.com</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Contact Number</span>
                      <span className="fs-13">+1 75964 25493</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Role</span>
                      <span className="fs-13">Admin</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="fw-bold text-dark fs-13">Status</span>
                      <span className="badge badge-soft-success">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xl-8">
              <div className="accordion accordion-bordered" id="BorderedaccordionExample">

                {/* Account Settings */}
                <div className="accordion-item bg-white mb-4">
                  <h2 className="accordion-header" id="account_settings_header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#account_settings"
                      aria-expanded="true"
                      aria-controls="account_settings"
                    >
                      Account Settings
                    </button>
                  </h2>
                  <div
                    id="account_settings"
                    className="accordion-collapse collapse show"
                    aria-labelledby="account_settings_header"
                    data-bs-parent="#BorderedaccordionExample"
                  >
                    <div className="accordion-body">
                      <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="fw-bold text-dark fs-13">Multi-Factor Authentication</span>
                          <span className="badge badge-soft-success">Enabled</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="fw-bold text-dark fs-13">Disclaimer Accepted</span>
                          <span className="badge badge-soft-success">Yes</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="fw-bold text-dark fs-13">Session Timeout</span>
                          <span className="fs-13">30 minutes</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <span className="fw-bold text-dark fs-13">Last Login</span>
                          <span className="fs-13">Jun 14, 2026, 09:42 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit Information */}
                <div className="accordion-item bg-white mb-4">
                  <h2 className="accordion-header" id="audit_info_header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#audit_info"
                      aria-expanded="false"
                      aria-controls="audit_info"
                    >
                      Audit Information
                    </button>
                  </h2>
                  <div
                    id="audit_info"
                    className="accordion-collapse collapse"
                    aria-labelledby="audit_info_header"
                    data-bs-parent="#BorderedaccordionExample"
                  >
                    <div className="accordion-body">
                      <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="fw-bold text-dark fs-13">Created At</span>
                          <span className="fs-13">Jan 12, 2025, 10:15 AM</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="fw-bold text-dark fs-13">Created By</span>
                          <span className="fs-13">Admin User</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="fw-bold text-dark fs-13">Modified At</span>
                          <span className="fs-13">Jun 10, 2026, 04:30 PM</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <span className="fw-bold text-dark fs-13">Modified By</span>
                          <span className="fs-13">Admin User</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <CommonFooter />
      </div>
    </>
  );
};

export default UserDetails;