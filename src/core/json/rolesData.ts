export type RoleData = {
  roleCode: string;
  roleName: string;
  description: string;
  isSystemRole: boolean;
  isActive: boolean;
};

export const rolesData: RoleData[] = [
  { roleCode: "SUPER_ADMIN", roleName: "Super Admin", description: "Full system access", isSystemRole: true, isActive: true },
  { roleCode: "TENANT_ADMIN", roleName: "Tenant Admin", description: "Manages tenant-level settings", isSystemRole: true, isActive: true },
  { roleCode: "PROVIDER", roleName: "Provider", description: "Clinical provider access", isSystemRole: true, isActive: true },
  { roleCode: "PATIENT", roleName: "Patient", description: "Patient portal access", isSystemRole: true, isActive: true },
  { roleCode: "BILLER", roleName: "Biller", description: "Billing and claims access", isSystemRole: false, isActive: true },
  { roleCode: "RECEPTIONIST", roleName: "Receptionist", description: "Front desk operations", isSystemRole: false, isActive: false },
];

export const getRoleByCode = (roleCode: string) =>
  rolesData.find((r) => r.roleCode === roleCode);