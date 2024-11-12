import * as v from 'valibot';
import {IdSchema} from '../../id.mjs';

export const NexioConfigSchema = v.object({
  id: IdSchema,
  orgId: IdSchema,
  name: v.pipe(v.string(), v.minLength(3), v.maxLength(60)),
  apiUser: v.pipe(v.string(), v.minLength(3), v.maxLength(256)),
  apiKey: v.pipe(v.string(), v.minLength(3), v.maxLength(256)),
});

export type NexioConfig = v.InferOutput<typeof NexioConfigSchema>;
