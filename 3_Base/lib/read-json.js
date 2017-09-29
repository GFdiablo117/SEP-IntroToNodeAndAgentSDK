const fs = require('fs');
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile);

function readJSONSync(path) {
    try {
        return JSON.parse(fs.readFileSync(path).toString());
    } catch (err) { throw err; }
}

async function readJSONAsync(path) {
    try {
        let data = await readFileAsync(path);
        return JSON.parse(data.toString());
    } catch (err) { throw err; }
}

module.exports = {
    readJsonSync: readJSONSync,
    readJsonAsync: readJSONAsync
};