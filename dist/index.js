//
// index.js
// @trenskow/timezones
//
// Created by Kristian Trenskow on 2024/02/03
// See license in LICENSE.
//

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const timezones = JSON.parse(await readFile(resolve(__dirname, './timezones.json')));

export default timezones;
