export type PermissionItem = {
  permissionCode: string;
  permissionName: string;
  module: string;
  description: string;
  isActive: boolean;
};

export const permissionsData: PermissionItem[] = [
  // Superbill
  { permissionCode: "SUPERBILL_CREATE", permissionName: "Create Superbill", module: "Superbill", description: "Allows creating new superbills", isActive: true },
  { permissionCode: "SUPERBILL_VIEW", permissionName: "View Superbill", module: "Superbill", description: "Allows viewing superbills", isActive: true },
  { permissionCode: "SUPERBILL_EDIT", permissionName: "Edit Superbill", module: "Superbill", description: "Allows editing existing superbills", isActive: true },
  { permissionCode: "SUPERBILL_DELETE", permissionName: "Delete Superbill", module: "Superbill", description: "Allows deleting superbills", isActive: false },
  // Claims
  { permissionCode: "CLAIMS_SUBMIT", permissionName: "Submit Claims", module: "Claims", description: "Allows submitting claims to payers", isActive: true },
  { permissionCode: "CLAIMS_VIEW", permissionName: "View Claims", module: "Claims", description: "Allows viewing claim status", isActive: true },
  { permissionCode: "CLAIMS_APPROVE", permissionName: "Approve Claims", module: "Claims", description: "Allows approving claims for billing", isActive: true },
  { permissionCode: "CLAIMS_REJECT", permissionName: "Reject Claims", module: "Claims", description: "Allows rejecting claims", isActive: false },
  // Reporting
  { permissionCode: "REPORT_VIEW", permissionName: "View Reports", module: "Reporting", description: "Allows viewing system reports", isActive: true },
  { permissionCode: "REPORT_EXPORT", permissionName: "Export Reports", module: "Reporting", description: "Allows exporting reports to Excel/PDF", isActive: true },
  { permissionCode: "REPORT_SCHEDULE", permissionName: "Schedule Reports", module: "Reporting", description: "Allows scheduling automated reports", isActive: false },
  // Administration
  { permissionCode: "ADMIN_USER_MANAGE", permissionName: "Manage Users", module: "Administration", description: "Allows creating and managing users", isActive: true },
  { permissionCode: "ADMIN_ROLE_MANAGE", permissionName: "Manage Roles", module: "Administration", description: "Allows creating and managing roles", isActive: true },
  { permissionCode: "ADMIN_PERMISSION_MANAGE", permissionName: "Manage Permissions", module: "Administration", description: "Allows managing system permissions", isActive: true },
  { permissionCode: "ADMIN_FACILITY_MANAGE", permissionName: "Manage Facilities", module: "Administration", description: "Allows managing facility settings", isActive: true },
];

export const moduleColors: Record<string, string> = {
  Superbill: "badge-soft-primary",
  Claims: "badge-soft-warning",
  Reporting: "badge-soft-info",
  Administration: "badge-soft-danger",
};
