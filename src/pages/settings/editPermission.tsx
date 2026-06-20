import { useEffect } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import CommonSelect from "../../components/common-select/commonSelect";
import { all_routes } from "../../routes/all_routes";

const ModuleOptions = [
  { value: "Superbill", label: "Superbill" },
  { value: "Claims", label: "Claims" },
  { value: "Reporting", label: "Reporting" },
  { value: "Administration", label: "Administration" },
];

const StatusOptions = [
  { value: "true", label: "Active" },
  { value: "false", label: "Inactive" },
];

const EditPermission = () => {
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
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Edit Permission</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Edit Permission</li>
              </ol>
            </div>
            <Link to={all_routes.permissionList} className="fw-medium d-flex align-items-center">
              <i className="ti ti-arrow-left me-1" />
              Back to Permissions
            </Link>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="card mb-0">
              <div className="card-body p-4">

                <div className="alert alert-warning d-flex align-items-start gap-2 mb-3 py-2 px-3">
                  <i className="ti ti-alert-triangle fs-16 mt-1 flex-shrink-0" />
                  <small>
                    <strong>Permission Code</strong> cannot be changed after creation as it
                    is used as a system identifier across roles and assignments.
                  </small>
                </div>

                <div className="row g-3">
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">Permission Code</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      defaultValue="SUPERBILL_CREATE"
                      readOnly
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Permission Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Create Superbill"
                    />
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Module<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={ModuleOptions}
                      className="select"
                      defaultValue={ModuleOptions[0]}
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

                  <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      defaultValue="Allows creating new superbills"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-3 border-top">
                  <Link to={all_routes.permissionList} className="btn btn-white">
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
              <p className="mb-4">Permission has been updated successfully.</p>
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to={all_routes.permissionList}
                  className="btn btn-outline-light position-relative z-1 w-100"
                  onClick={handleModalNavigation}
                >
                  Back to Permissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPermission;