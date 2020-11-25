/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const clean = (obj: any): any => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_key, value]) => {
      return !!value;
    }),
  );
};
