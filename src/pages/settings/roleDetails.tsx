import { Link, useParams } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import { getPermissionsForRole } from "../../core/json/rolePermissionStore";
import { getRoleByCode } from "../../core/json/rolesData";

const moduleColors: Record<string, string> = {
  Superbill: "badge-soft-primary",
  Claims: "badge-soft-warning",
  Reporting: "badge-soft-info",
  Administration: "badge-soft-danger",
};

const RoleDetails = () => {
  const { roleCode } = useParams<{ roleCode: string }>();
  const roleData = getRoleByCode(roleCode || "");

  if (!roleData) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <i className="ti ti-alert-circle fs-32 text-danger mb-2 d-block" />
            <h5>Role not found</h5>
            <Link to={all_routes.roleList} className="btn btn-primary mt-3">
              Back to Roles
            </Link>
          </div>
        </div>
        <CommonFooter />
      </div>
    );
  }

  const assignedPermissions = getPermissionsForRole(roleData.roleCode);

  // Group permissions by module
  const grouped = assignedPermissions.reduce((acc, p) => {
    if (!acc[p.module]) acc[p.module] = [];
    acc[p.module].push(p);
    return acc;
  }, {} as Record<string, typeof assignedPermissions>);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">

          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Role Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.roleList}>Roles</Link>
                </li>
                <li className="breadcrumb-item active">Role Details</li>
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

          <div className="row row-gap-4">

            {/* Left Column — Role Info */}
            <div className="col-xl-4">
              <div className="card mb-0">
                <div className="card-body">

                  {/* Role Identity */}
                  <div className="d-flex align-items-center gap-3 pb-3 mb-3 border-bottom">
                    <span className="avatar avatar-xl bg-primary-transparent text-primary rounded-circle d-inline-flex align-items-center justify-content-center">
                      <i className="ti ti-shield fs-28" />
                    </span>
                    <div>
                      <h5 className="mb-1 fw-semibold">{roleData.roleName}</h5>
                      <span className="badge bg-light text-dark border fs-12">
                        {roleData.roleCode}
                      </span>
                    </div>
                  </div>

                  {/* Role Info */}
                  <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i className="ti ti-info-circle me-2 fs-16" />
                    Role Information
                  </h6>
                  <div className="bg-light rounded p-3">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Role Code</span>
                      <span className="fs-13">{roleData.roleCode}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Role Name</span>
                      <span className="fs-13">{roleData.roleName}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Role Type</span>
                      <span className="fs-13">
                        {roleData.isSystemRole ? (
                          <span className="badge badge-soft-primary">System</span>
                        ) : (
                          <span className="badge badge-soft-secondary">Custom</span>
                        )}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Status</span>
                      <span className={`badge ${roleData.isActive ? "badge-soft-success" : "badge-soft-danger"}`}>
                        {roleData.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="fw-bold text-dark fs-13">Total Permissions</span>
                      <span className="fs-13 fw-semibold text-primary">{assignedPermissions.length}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {roleData.description && (
                    <div className="mt-3">
                      <h6 className="fw-bold text-primary mb-2 d-flex align-items-center">
                        <i className="ti ti-notes me-2 fs-16" />
                        Description
                      </h6>
                      <p className="fs-13 text-muted mb-0 bg-light rounded p-3">
                        {roleData.description}
                      </p>
                    </div>
                  )}

                  {roleData.isSystemRole && (
                    <div className="alert alert-warning d-flex align-items-start gap-2 mt-3 mb-0 py-2 px-3">
                      <i className="ti ti-lock fs-16 mt-1 flex-shrink-0" />
                      <small>This is a system role and cannot be modified.</small>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Right Column — Assigned Permissions */}
            <div className="col-xl-8">
              <div className="card mb-0">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-key text-primary fs-18" />
                    Assigned Permissions
                  </h5>
                  <span className="badge bg-primary fs-12">
                    {assignedPermissions.length} permissions
                  </span>
                </div>
                <div className="card-body">
                  {Object.keys(grouped).length > 0 ? (
                    Object.entries(grouped).map(([module, perms]) => (
                      <div key={module} className="mb-4">
                        {/* Module heading */}
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span className={`badge ${moduleColors[module] || "badge-soft-secondary"} fs-12 px-3 py-2`}>
                            <i className="ti ti-layout-grid me-1" />
                            {module}
                          </span>
                          <span className="text-muted fs-12">
                            {perms.length} permission{perms.length !== 1 ? "s" : ""}
                          </span>
                        </div>

                        {/* Permissions list */}
                        <div className="row g-2">
                          {perms.map((p, idx) => (
                            <div key={idx} className="col-md-6">
                              <div className="d-flex align-items-center gap-2 p-2 bg-light rounded border">
                                <span className="avatar avatar-xs bg-success-transparent text-success rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0">
                                  <i className="ti ti-check fs-12" />
                                </span>
                                <div>
                                  <p className="fs-13 fw-medium mb-0">{p.permissionName}</p>
                                  <small className="text-muted fs-11">{p.permissionCode}</small>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-muted">
                      <i className="ti ti-key-off fs-32 mb-2 d-block" />
                      No permissions assigned to this role yet.
                    </div>
                  )}
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

export default RoleDetails;