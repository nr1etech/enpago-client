import * as v from 'valibot';
import {IdSchema} from '../../id.mjs';

export const GoHighLevelConnectorSchema = v.object({
  id: IdSchema,
  orgId: IdSchema,
  name: v.pipe(v.string(), v.minLength(3), v.maxLength(60)),
});

export type GoHighLevelConnector = v.InferOutput<
  typeof GoHighLevelConnectorSchema
>;
