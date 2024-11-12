import * as v from 'valibot';
import {IdSchema} from '../../id.mjs';
import {IsoDateSchema} from '../../iso-date.mjs';
import {EmailSchema} from '../../email.mjs';

export const GoHighLevelLocationSchema = v.pipe(v.string(), v.maxLength(256));

export const GoHighLevelConnectionSchema = v.object({
  id: IdSchema,
  companyId: v.pipe(v.string(), v.minLength(3), v.maxLength(256)),
  agencyId: v.pipe(v.string(), v.minLength(3), v.maxLength(256)),
  orgId: IdSchema,
  location: GoHighLevelLocationSchema,
  active: v.boolean(),
  connectDate: IsoDateSchema,
  connectedBy: v.optional(
    v.object({
      email: v.optional(EmailSchema),
      userName: v.optional(v.string()),
      userId: v.optional(v.string()),
    }),
  ),
});

export type GoHighLevelConnection = v.InferOutput<
  typeof GoHighLevelConnectionSchema
>;
