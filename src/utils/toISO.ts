export const toISO = (val: Date | string) => {
  if (val instanceof Date) {
    return val.toISOString();
  }

  if (typeof val === 'string') {
    return new Date(val).toISOString();
  }

  return null;
};
