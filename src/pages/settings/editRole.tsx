import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import CommonSelect from "../../components/common-select/commonSelect";
import { all_routes } from "../../routes/all_routes";
import { permissionsData, moduleColors } from "../../core/json/permissionsData";

const StatusOptions = [
  { value: "true", label: "Active" },
  { value: "false", label: "Inactive" },
];

// Mock — permissions already assigned to this role
const initialAssigned = ["SUPERBILL_VIEW", "SUPERBILL_CREATE", "CLAIMS_VIEW", "CLAIMS_SUBMIT", "CLAIMS_APPROVE", "REPORT_VIEW", "REPORT_EXPORT"];

const EditRole = () => {
  const [assignedPermissions, setAssignedPermissions] = useState<string[]>(initialAssigned);

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

  const togglePermission = (code: string) => {
    setAssignedPermissions((prev) =>
      prev.includes(code)
        ? prev.filter((c) => c !== code)
        : [...prev, code]
    );
  };

  const isAssigned = (code: string) => assignedPermissions.includes(code);

  // Group permissions by module
  const grouped = permissionsData.reduce((acc, p) => {
    if (!acc[p.module]) acc[p.module] = [];
    acc[p.module].push(p);
    return acc;
  }, {} as Record<string, typeof permissionsData>);

  const toggleModule = (moduleName: string) => {
    const moduleCodes = (grouped[moduleName] || []).map((p) => p.permissionCode);
    const allAssigned = moduleCodes.every((c) => assignedPermissions.includes(c));
    if (allAssigned) {
      setAssignedPermissions((prev) => prev.filter((c) => !moduleCodes.includes(c)));
    } else {
      setAssignedPermissions((prev) => [...new Set([...prev, ...moduleCodes])]);
    }
  };

  const isModuleFullyAssigned = (moduleName: string) => {
    const moduleCodes = (grouped[moduleName] || []).map((p) => p.permissionCode);
    return moduleCodes.every((c) => assignedPermissions.includes(c));
  };

  const isModulePartiallyAssigned = (moduleName: string) => {
    const moduleCodes = (grouped[moduleName] || []).map((p) => p.permissionCode);
    return moduleCodes.some((c) => assignedPermissions.includes(c)) && !isModuleFullyAssigned(moduleName);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Edit Role</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Edit Role</li>
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

            {/* Role Info Card */}
            <div className="card mb-3">
              <div className="card-body p-4">

                {/* Read-only notice for role code */}
                <div className="alert alert-warning d-flex align-items-start gap-2 mb-3 py-2 px-3">
                  <i className="ti ti-alert-triangle fs-16 mt-1 flex-shrink-0" />
                  <small>
                    <strong>Role Code</strong> cannot be changed after creation as it is used
                    as a system identifier.
                  </small>
                </div>

                <div className="row g-3">
                  {/* Role Code — read only */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">Role Code</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      defaultValue="BILLER"
                      readOnly
                    />
                  </div>

                  {/* Role Name */}
                  <div className="col-xl-4 col-md-6">
                    <label className="form-label">
                      Role Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Biller"
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
                      defaultValue="Billing and claims access"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Permissions Card */}
            <div className="card mb-0">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="mb-0 d-flex align-items-center gap-2">
                  <i className="ti ti-key text-primary fs-18" />
                  Assign Permissions
                </h5>
                <span className="badge bg-primary fs-12">
                  {assignedPermissions.length} selected
                </span>
              </div>
              <div className="card-body">

                {Object.entries(grouped).map(([module, perms]) => (
                  <div key={module} className="mb-4">
                    {/* Module heading with select all toggle */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className={`badge ${moduleColors[module] || "badge-soft-secondary"} fs-12 px-3 py-2`}>
                          <i className="ti ti-layout-grid me-1" />
                          {module}
                        </span>
                        <span className="text-muted fs-12">
                          {perms.filter((p) => isAssigned(p.permissionCode)).length}/{perms.length} selected
                        </span>
                      </div>
                      {/* Select All for module */}
                      <div className="form-check mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`module-${module}`}
                          checked={isModuleFullyAssigned(module)}
                          ref={(el) => {
                            if (el) el.indeterminate = isModulePartiallyAssigned(module);
                          }}
                          onChange={() => toggleModule(module)}
                          style={{ width: "16px", height: "16px", cursor: "pointer" }}
                        />
                        <label
                          className="form-check-label fs-13 ms-1"
                          htmlFor={`module-${module}`}
                          style={{ cursor: "pointer" }}
                        >
                          Select All
                        </label>
                      </div>
                    </div>

                    {/* Permission checkboxes */}
                    <div className="row g-2">
                      {perms.map((p, idx) => (
                        <div key={idx} className="col-md-6 col-xl-4">
                          <div
                            className={`d-flex align-items-center gap-2 p-2 rounded border ${isAssigned(p.permissionCode) ? "border-primary bg-primary bg-opacity-10" : "bg-light"}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => togglePermission(p.permissionCode)}
                          >
                            <input
                              type="checkbox"
                              className="form-check-input mt-0 flex-shrink-0"
                              checked={isAssigned(p.permissionCode)}
                              onChange={() => togglePermission(p.permissionCode)}
                              style={{ width: "16px", height: "16px", cursor: "pointer" }}
                            />
                            <div>
                              <p className="fs-13 fw-medium mb-0">{p.permissionName}</p>
                              <small className="text-muted fs-11">{p.permissionCode}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

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
              <p className="mb-4">Role has been updated successfully.</p>
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

export default EditRole;