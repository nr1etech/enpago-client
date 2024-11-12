import * as v from 'valibot';

export const IdSchema = v.pipe(
  v.string(),
  v.length(22, 'Invalid ID length: Must be 22 characters'),
  v.regex(
    /^[a-zA-Z0-9\-_]+$/,
    'Invalid ID characters: Must be alphanumeric, hyphen, or underscore',
  ),
);
