import { useEffect } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import CommonSelect from "../../components/common-select/commonSelect";
import { all_routes } from "../../routes/all_routes";

const RoleOptions = [
  { value: "admin", label: "Admin" },
  { value: "provider", label: "Provider" },
  { value: "biller", label: "Biller" },
  { value: "receptionist", label: "Receptionist" },
];

const StatusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const EditUser = () => {
  useEffect(() => {
    document.body.classList.remove("modal-open");
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((el) => el.parentNode && el.parentNode.removeChild(el));
  }, []);

  const handleModalNavigation = () => {
    const modal = document.getElementById("success_modal");
    if (modal) {
      // @ts-ignore
      const bsModal =
        window.bootstrap.Modal.getInstance(modal) ||
        new window.bootstrap.Modal(modal);
      bsModal.hide();
      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) backdrop.remove();
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Edit User</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Edit User</li>
              </ol>
            </div>
            <Link
              to={all_routes.userList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Users
            </Link>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="card mb-0">
              <div className="card-body p-4">

                {/* Fields */}
                <div className="row g-3">

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Sarah"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter middle name"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Johnson"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Username<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="sarah.johnson"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Email Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="sarah.johnson@example.com"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Contact Number<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue="+1 75964 25493"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Role<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={RoleOptions}
                      className="select"
                      defaultValue={RoleOptions[3]}
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Status<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={StatusOptions}
                      className="select"
                      defaultValue={StatusOptions[0]}
                    />
                  </div>
                </div>

                {/* Buttons inside card */}
                <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-3 border-top">
                  <Link to={all_routes.userList} className="btn btn-white">
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#success_modal"
                  >
                    Save Changes
                  </Link>
                </div>

              </div>
            </div>
          </form>
        </div>

        <CommonFooter />
      </div>

      {/* Success Modal */}
      <div className="modal fade" id="success_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <div className="mb-2 position-relative z-1">
                <span className="avatar avatar-md bg-success rounded-circle">
                  <i className="ti ti-circle-check fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Updated Successfully</h5>
              <p className="mb-4">User details have been updated successfully.</p>
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to={all_routes.userList}
                  className="btn btn-outline-light position-relative z-1 w-100"
                  onClick={handleModalNavigation}
                >
                  Back to Users
                </Link>
                <Link
                  to={all_routes.userDetails}
                  className="btn btn-primary position-relative z-1 w-100"
                  onClick={handleModalNavigation}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;