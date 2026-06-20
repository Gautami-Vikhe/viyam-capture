import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import CommonSelect from "../../components/common-select/commonSelect";
import PermissionsMatrix from "../../components/permissions-matrix/permissionsMatrix";
import { all_routes } from "../../routes/all_routes";
import { permissionsData } from "../../core/json/permissionsData";

const StatusOptions = [
  { value: "true", label: "Active" },
  { value: "false", label: "Inactive" },
];

const AddRole = () => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

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
              <h4 className="mb-1">Add Role</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Add Role</li>
              </ol>
            </div>
            <Link
              to={all_routes.roleList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Roles
            </Link>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="card mb-0">
              <div className="card-body p-4">

                <div className="row g-3">
                  {/* Role Code */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Role Code<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. BILLER"
                      style={{ textTransform: "uppercase" }}
                    />
                    <small className="text-muted fs-12 mt-1 d-block">
                      Unique code, no spaces (e.g. BILLER, FRONT_DESK)
                    </small>
                  </div>

                  {/* Role Name */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Role Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Biller"
                    />
                  </div>

                  {/* Status */}
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

                  {/* Description */}
                  <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      placeholder="Brief description of this role's responsibilities (optional)"
                    />
                  </div>

                  {/* Permissions */}
                  <div className="col-md-12">
                    <label className="form-label">
                      Permissions<span className="text-danger ms-1">*</span>
                      <span className="text-muted fs-12 ms-2">
                        (Check the actions this role should be able to perform, per module)
                      </span>
                    </label>
                    <PermissionsMatrix
                      permissions={permissionsData}
                      selectedCodes={selectedPermissions}
                      onChange={setSelectedPermissions}
                    />
                  </div>
                </div>

                {/* Info note about system roles */}
                <div className="alert alert-info d-flex align-items-start gap-2 mt-3 mb-0 py-2 px-3">
                  <i className="ti ti-info-circle fs-16 mt-1 flex-shrink-0" />
                  <small>
                    Roles created here are <strong>custom roles</strong>. Built-in system roles
                    (SUPER_ADMIN, TENANT_ADMIN, PROVIDER, PATIENT) are protected and cannot be
                    modified or deleted.
                  </small>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end align-items-center gap-2 mt-4 pt-3 border-top">
                  <Link to={all_routes.roleList} className="btn btn-white">
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#success_modal"
                  >
                    Save Role
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
              <h5 className="mb-1">Added Successfully</h5>
              <p className="mb-4">Role has been added to the Roles List.</p>
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to={all_routes.roleList}
                  className="btn btn-outline-light position-relative z-1 w-100"
                  onClick={handleModalNavigation}
                >
                  Back to Roles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRole;
