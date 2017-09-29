'use strict';
const Path = require('path');

const { readJsonSync, readJsonAsync } = require('./lib/read-json');
const staticFile = require('./static');

async function main() {
    try {
        let path = Path.join(__dirname, 'data', 'dynamic.json');
        const dynamicFile = await readJsonAsync(path); // JSON.stringify(readJsonSync(path));
        console.log('Content of the static referenced JSON:', JSON.stringify(staticFile));
        console.log('Content of the dynamic referenced JSON:', JSON.stringify(dynamicFile));
    }
    catch (err) {
        console.error('ERROR:', err);
    }
}

main();