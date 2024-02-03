//
// build.js
// @trenskow/timezones
//
// Created by Kristian Trenskow on 2024/02/03
// See license in LICENSE.
//

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, writeFileSync } from 'node:fs';
import readline from 'node:readline';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rl = readline.createInterface({
	input: createReadStream(resolve(__dirname, '../data/timezones.csv'), 'utf-8'),
});

const all = {};

const parseOffset = (offset) => {
	const sign = offset[0] === '−' ? -1 : 1;
	const [hours, minutes] = offset.substring(1).split(':').map(Number);
	return sign * (hours * 60 + minutes);
};

for await (const line of rl) {

	const parts = line
		.split('')
		.reduce((acc, char) => {
			if (char === '"') acc.skip = !acc.skip;
			else if (char === ',' && !acc.skip) acc.indices.push('');
			else acc.indices[acc.indices.length - 1] += char;
			return acc;
		}, { indices: [''], skip: false })
		.indices;

	all[parts[1]] = {
		countries: parts[0].split(/,\s?/),
		std: {
			offset: {
				minutes: parseOffset(parts[4]),
				duration: parts[4]
			},
			abbreviation: parts[6],
		}
	};

	if (parts[4] !== parts[5] || parts[6] !== parts[7]) {
		all[parts[1]].dst = {
			offset: {
				minutes: parseOffset(parts[5]),
				duration: parts[5]
			},
			abbreviation: parts[7],
		};
	}

}

writeFileSync(resolve(__dirname, '../dist/timezones.json'), JSON.stringify(all, null, '\t'));

console.info('Timezones built.');
