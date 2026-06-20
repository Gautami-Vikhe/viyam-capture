import { Link, useParams } from "react-router-dom";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import { permissionsData, moduleColors } from "../../core/json/permissionsData";
import { getRolesForPermission } from "../../core/json/rolePermissionStore";

const systemRoleCodes = ["SUPER_ADMIN", "TENANT_ADMIN", "PROVIDER", "PATIENT"];

const PermissionDetails = () => {
  const { permissionCode } = useParams<{ permissionCode: string }>();
  const permissionData = permissionsData.find((p) => p.permissionCode === permissionCode);

  if (!permissionData) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <i className="ti ti-alert-circle fs-32 text-danger mb-2 d-block" />
            <h5>Permission not found</h5>
            <Link to={all_routes.permissionList} className="btn btn-primary mt-3">
              Back to Permissions
            </Link>
          </div>
        </div>
        <CommonFooter />
      </div>
    );
  }

  const assignedRoles = getRolesForPermission(permissionData.permissionCode).map((r) => ({
    roleCode: r.code,
    roleName: r.name,
    isSystemRole: systemRoleCodes.includes(r.code),
  }));

  return (
    <>
      <div className="page-wrapper">
        <div className="content">

          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div className="breadcrumb-arrow">
              <h4 className="mb-1">Permission Details</h4>
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.permissionList}>Permissions</Link>
                </li>
                <li className="breadcrumb-item active">Permission Details</li>
              </ol>
            </div>
            <Link
              to={all_routes.permissionList}
              className="fw-medium d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Permissions
            </Link>
          </div>

          <div className="row row-gap-4">

            {/* Left Column — Permission Info */}
            <div className="col-xl-4">
              <div className="card mb-0">
                <div className="card-body">

                  {/* Permission Identity */}
                  <div className="d-flex align-items-center gap-3 pb-3 mb-3 border-bottom">
                    <span className="avatar avatar-xl bg-primary-transparent text-primary rounded-circle d-inline-flex align-items-center justify-content-center">
                      <i className="ti ti-key fs-28" />
                    </span>
                    <div>
                      <h5 className="mb-1 fw-semibold">{permissionData.permissionName}</h5>
                      <span className="badge bg-light text-dark border fs-12">
                        {permissionData.permissionCode}
                      </span>
                    </div>
                  </div>

                  {/* Permission Info */}
                  <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i className="ti ti-info-circle me-2 fs-16" />
                    Permission Information
                  </h6>
                  <div className="bg-light rounded p-3">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Permission Code</span>
                      <span className="fs-13">{permissionData.permissionCode}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Permission Name</span>
                      <span className="fs-13">{permissionData.permissionName}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Module</span>
                      <span className={`badge ${moduleColors[permissionData.module] || "badge-soft-secondary"} fs-12`}>
                        {permissionData.module}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <span className="fw-bold text-dark fs-13">Status</span>
                      <span className={`badge ${permissionData.isActive ? "badge-soft-success" : "badge-soft-danger"}`}>
                        {permissionData.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <span className="fw-bold text-dark fs-13">Assigned To</span>
                      <span className="fs-13 fw-semibold text-primary">{assignedRoles.length} roles</span>
                    </div>
                  </div>

                  {/* Description */}
                  {permissionData.description && (
                    <div className="mt-3">
                      <h6 className="fw-bold text-primary mb-2 d-flex align-items-center">
                        <i className="ti ti-notes me-2 fs-16" />
                        Description
                      </h6>
                      <p className="fs-13 text-muted mb-0 bg-light rounded p-3">
                        {permissionData.description}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Right Column — Assigned Roles */}
            <div className="col-xl-8">
              <div className="card mb-0">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti ti-shield text-primary fs-18" />
                    Roles with this Permission
                  </h5>
                  <span className="badge bg-primary fs-12">
                    {assignedRoles.length} roles
                  </span>
                </div>
                <div className="card-body">
                  {assignedRoles.length > 0 ? (
                    <div className="table-responsive table-nowrap">
                      <table className="table mb-0 border">
                        <thead className="table-light">
                          <tr>
                            <th>Role Code</th>
                            <th>Role Name</th>
                            <th>Role Type</th>
                            <th className="no-sort" />
                          </tr>
                        </thead>
                        <tbody>
                          {assignedRoles.map((r, idx) => (
                            <tr key={idx}>
                              <td>
                                <span className="badge bg-light text-dark border fs-12 fw-medium">
                                  {r.roleCode}
                                </span>
                              </td>
                              <td>
                                <h6 className="fs-14 mb-0 fw-medium">{r.roleName}</h6>
                              </td>
                              <td>
                                {r.isSystemRole ? (
                                  <span className="badge badge-soft-primary">System</span>
                                ) : (
                                  <span className="badge badge-soft-secondary">Custom</span>
                                )}
                              </td>
                              <td className="text-end">
                                <Link
                                  to={`/role-details/${r.roleCode}`}
                                  className="btn btn-sm btn-outline-primary"
                                >
                                  <i className="ti ti-eye me-1" />
                                  View Role
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-4 text-muted">
                      <i className="ti ti-shield-off fs-32 mb-2 d-block" />
                      This permission is not assigned to any role yet.
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

export default PermissionDetails;