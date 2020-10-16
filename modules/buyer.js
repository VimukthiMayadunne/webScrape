var faker = require('faker');

async function createBuyer(){
    return new Promise(async function(resolve, reject) {
        try{
            const buyer ={
                name : faker.name.findName(),
                address : faker.address.city(),
                contact : faker.phone.phoneNumber(),
                dot: faker.date.future(),
                deposit : faker.finance.amount(),
                dod : faker.date.recent(), 
                dot : faker.date.recent(),
            }

            resolve(buyer)
        }
        catch(err){
            console.error(err)
            return reject(err)
        }
    });
}

module.exports ={createBuyer}