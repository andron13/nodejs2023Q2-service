import { readFileSync } from 'fs';
import { join } from 'path';

import * as YAML from 'yamljs';

const yamlDocument = readFileSync(
  join(__dirname, '../../doc/api.yaml'),
  'utf8',
);
export const swaggerConfig = YAML.parse(yamlDocument);
