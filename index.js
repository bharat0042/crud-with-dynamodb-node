const dbClient = require("./src/core.js");
const https = require("https");


async function testCreateItem() {
    const params = {

    };

    try {

    } catch (err) {

    }
}


async function bulkInsert() {
    const options = {
        hostname: 'random-data-api.com',
        path: '/api/v2/credit_cards',
        method: 'GET'
    };

    let data = await sendHttpsRequest(options);
    let parsedData = JSON.parse(data);
    let res = await dbClient.createItem(parsedData);
    console.log(res);

    // for(let i = 0; i < 100; i++) {
    //     let data = await sendHttpsRequest(options);
    //     let parsedData = JSON.parse(data);
    //     let res = await dbClient.createItem(parsedData);
    //     console.log(res);
    // }
}

async function sendHttpsRequest(options) {
    return new Promise((resolve, reject) => {      
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(data);
            });
               
        });
        
        req.on("error", (err) => {
            reject(err);
        });
        
        req.end();
    });
}

bulkInsert().then(data => console.log(data));