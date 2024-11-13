import * as v from 'valibot';

export const AgencyNameSchema = v.pipe(
  v.string(),
  v.minLength(3),
  v.maxLength(60),
);
