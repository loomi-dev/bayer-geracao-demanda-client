import { useCallback } from 'react';

export const useRBAC = () => {
  const { user } = { user: { data: 'example' } };

  if (!user) {
    throw Error('User does not exist!');
  }

  const checkAllowedRole = useCallback(
    () =>
      // if (allowedRoles && allowedRoles.length > 0) {
      //   return allowedRoles?.includes(user.role);
      // }

      true,
    [],
  );

  return { checkAllowedRole, role: '' };
};
