import * as v from 'valibot';
import {IdSchema} from '../id.mjs';

export const OrgNameSchema = v.pipe(
  v.string(),
  v.minLength(3),
  v.maxLength(60),
);

export const OrgSchema = v.object({
  id: IdSchema,
  agencyId: IdSchema,
  name: OrgNameSchema,
});

export type Org = v.InferOutput<typeof OrgSchema>;
