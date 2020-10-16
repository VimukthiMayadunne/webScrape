const rp = require('request-promise');
const $ = require('cheerio');

async function getCarDetails(url){
    return new Promise(async function(resolve, reject) {
        try{
        rp(url)
        .then(function(html){
            const car ={
                owner : {
                    name : null,
                    addres: null,
                    contact : null
                },
                model : null,
                make : null,
                price : null,
                year :null,
                milage :null,
                dos : null,
                cc :null,
            }
            car.owner.name = ($('#content > table > tbody > tr:nth-child(2) > td:nth-child(4) > span', html).text())
            car.owner.addres = ($('#content > table > tbody > tr:nth-child(4) > td:nth-child(2)', html).text())
            car.owner.contact = ($('#content > table > tbody > tr:nth-child(2) > td:nth-child(2) > span', html).text())

            car.model = ($('#content > table > tbody > tr:nth-child(6) > td:nth-child(2)', html).text())
            car.make =  ($('#content > table > tbody > tr:nth-child(5) > td:nth-child(4)', html).text())
            car.price = ($('#content > table > tbody > tr:nth-child(5) > td:nth-child(2)', html).text())
            car.year = ($('#content > table > tbody > tr:nth-child(6) > td:nth-child(4)', html).text())
            car.milage = ($('#content > table > tbody > tr:nth-child(9) > td:nth-child(4)', html).text())
            car.dos =($('#content > table > tbody > tr:nth-child(4) > td:nth-child(4) > time', html).text())
            car.cc = ($('#content > table > tbody > tr:nth-child(8) > td:nth-child(4)', html).text())

            resolve (car)
             })
         }
        catch(err){
            console.error(err)
            return reject(err)
        }
    });
}
module.exports={getCarDetails}



