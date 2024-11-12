import * as v from 'valibot';
import {IdSchema} from '../id.mjs';

export const AgencyNameSchema = v.pipe(
  v.string(),
  v.minLength(3),
  v.maxLength(60),
);

export const AgencySchema = v.object({
  id: IdSchema,
  name: AgencyNameSchema,
});

export type Agency = v.InferOutput<typeof AgencySchema>;
