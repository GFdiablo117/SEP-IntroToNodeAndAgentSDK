const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

function request(url, succeed = true, callback = null) {
    const TIME = 4000;
    if (callback) {
        setTimeout(() => {
            callback(succeed ? null : new Error('Request failed'), { success: true, status: 200, body: 'Hello World' });
        }, TIME);
        return;
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (succeed) {
                    resolve({ success: true, status: 200, body: 'Hello World' });
                } else {
                    reject(new Error('Request failed'));
                }
            }, TIME);
        });
    }
}

function callbackFlow() {
    request('special-page', true, (err, res) => {
        if (err) return console.error(err.message);
        fs.writeFile(path.join(__dirname, 'downloads', 'cb-special-page.json'), JSON.stringify(res), (err, res) => {
            if (err) return console.error(err.message);
            request('fail-page', false, (err, res) => {
                if (err) return console.error(err.message);
                fs.writeFile(path.join(__dirname, 'downloads', 'cb-fail-page.json'), JSON.stringify(res), (err, res) => {
                    if (err) return console.error(err.message);
                });
            });
        });
    });
}

function promiseFlow() {
    request('special-page', true)
        .then(res => writeFile(path.join(__dirname, 'downloads', 'promise-special-page.json'), JSON.stringify(res)))
        .then(_ => request('fail-page', false))
        .then(res => writeFile(path.join(__dirname, 'downloads', 'promise-fail-page.json'), JSON.stringify(res)))
        .catch(err => console.error(err.message));
}

async function asyncFlow() {
    try {
        let specialPage = await request('special-page', true);
        await writeFile(path.join(__dirname, 'downloads', 'await-special-page.json'), JSON.stringify(specialPage));
        let failPage = await request('fail-page', false);
        await writeFile(path.join(__dirname, 'downloads', 'await-fail-page.json'), JSON.stringify(failPage));
    } catch (err) {
        console.error(err.message);
    }
}


if (!fs.existsSync(path.join(__dirname, 'downloads'))) fs.mkdirSync(path.join(__dirname, 'downloads'))

callbackFlow();
promiseFlow();
asyncFlow();