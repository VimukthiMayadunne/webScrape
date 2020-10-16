const fastcsv = require('fast-csv');
const fs = require('fs');
let ws = fs.createWriteStream('contracts.csv', { flag: 'a' });

async function createDetilsCsv(data){
    return new Promise(async function(resolve, reject) {
        try{
            fastcsv
                .write(data, { headers: true })
                .pipe(ws);

            resolve(0)
        }
        catch(err){
            console.error(err)
            return reject(err)
        }
    });
}

module.exports ={createDetilsCsv}