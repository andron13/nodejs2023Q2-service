import { readFileSync } from 'fs';
import { join, normalize } from 'path';

import * as YAML from 'yamljs';

const pathToYaml: string = '../../doc/api.yaml';
const yamlDocument = readFileSync(
  join(__dirname, normalize(pathToYaml)),
  'utf8',
);
export const swaggerConfig = YAML.parse(yamlDocument);
