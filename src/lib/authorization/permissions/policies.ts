export const POLICIES = {
  'income:delete': () => true,
};

export type PoliciesTypes = keyof typeof POLICIES;
