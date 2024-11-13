import * as v from 'valibot';

export const OrgNameSchema = v.pipe(
  v.string(),
  v.minLength(3),
  v.maxLength(60),
);
