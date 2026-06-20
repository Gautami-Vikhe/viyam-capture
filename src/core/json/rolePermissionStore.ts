import { permissionsData } from "./permissionsData";

export type RoleCode = "SUPER_ADMIN" | "TENANT_ADMIN" | "PROVIDER" | "BILLER" | "RECEPTIONIST";

export const roles: { code: RoleCode; name: string }[] = [
  { code: "SUPER_ADMIN", name: "Super Admin" },
  { code: "TENANT_ADMIN", name: "Tenant Admin" },
  { code: "PROVIDER", name: "Provider" },
  { code: "BILLER", name: "Biller" },
  { code: "RECEPTIONIST", name: "Receptionist" },
];

// permissionCode -> array of assigned role codes
// Simulates a database table, shared across the app (in-memory only, resets on page refresh)
export let rolePermissionMatrix: Record<string, string[]> = {
  SUPERBILL_CREATE: ["SUPER_ADMIN", "TENANT_ADMIN", "PROVIDER", "BILLER"],
  SUPERBILL_VIEW: ["SUPER_ADMIN", "TENANT_ADMIN", "PROVIDER", "BILLER", "RECEPTIONIST"],
  SUPERBILL_EDIT: ["SUPER_ADMIN", "TENANT_ADMIN", "PROVIDER"],
  SUPERBILL_DELETE: ["SUPER_ADMIN"],
  CLAIMS_SUBMIT: ["SUPER_ADMIN", "TENANT_ADMIN", "BILLER"],
  CLAIMS_VIEW: ["SUPER_ADMIN", "TENANT_ADMIN", "PROVIDER", "BILLER"],
  CLAIMS_APPROVE: ["SUPER_ADMIN", "TENANT_ADMIN"],
  CLAIMS_REJECT: ["SUPER_ADMIN", "TENANT_ADMIN"],
  REPORT_VIEW: ["SUPER_ADMIN", "TENANT_ADMIN", "PROVIDER", "BILLER"],
  REPORT_EXPORT: ["SUPER_ADMIN", "TENANT_ADMIN", "BILLER"],
  REPORT_SCHEDULE: ["SUPER_ADMIN"],
  ADMIN_USER_MANAGE: ["SUPER_ADMIN", "TENANT_ADMIN"],
  ADMIN_ROLE_MANAGE: ["SUPER_ADMIN"],
  ADMIN_PERMISSION_MANAGE: ["SUPER_ADMIN"],
  ADMIN_FACILITY_MANAGE: ["SUPER_ADMIN", "TENANT_ADMIN"],
};

export const updateMatrix = (newMatrix: Record<string, string[]>) => {
  rolePermissionMatrix = { ...newMatrix };
};

export const getPermissionsForRole = (roleCode: string) => {
  return permissionsData.filter((p) =>
    (rolePermissionMatrix[p.permissionCode] || []).includes(roleCode)
  );
};

export const getRolesForPermission = (permissionCode: string) => {
  const assignedCodes = rolePermissionMatrix[permissionCode] || [];
  return roles.filter((r) => assignedCodes.includes(r.code));
};