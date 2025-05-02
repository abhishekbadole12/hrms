// Strictly typed enum from above for logic control
export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  HR = "HR",
  EMPLOYEE = "EMPLOYEE",
}

// Define a role hierarchy
export const RoleHierarchy: Record<UserRole, number> = {
  [UserRole.ADMIN]: 4,
  [UserRole.MANAGER]: 3,
  [UserRole.HR]: 2,
  [UserRole.EMPLOYEE]: 1,
};

// Helper: Check if one role outranks another
export function hasAccess(
  currentRole: UserRole,
  targetRole: UserRole
): boolean {
  if (currentRole === UserRole.ADMIN && targetRole === UserRole.ADMIN) {
    return true; // Admin can access admin
  }
  return RoleHierarchy[currentRole] > RoleHierarchy[targetRole];
}

// Helper: Determine update permission (self or higher role)
export function canUpdate(
  currentUserId: string,
  targetUserId: string,
  currentRole: UserRole,
  targetRole: UserRole
): boolean {
  if (currentUserId === targetUserId) return true;
  return hasAccess(currentRole, targetRole);
}
