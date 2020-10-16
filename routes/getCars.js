const rp = require('request-promise');
const url = 'https://riyasewana.com/search/cars?page=3';
const express = require('express');
const $ = require('cheerio');
const router =express.Router();
const getCar = require('../modules/car')
const contract = require('../modules/contract')
const buyer = require('../modules/buyer')
const det = require('../modules/details')



router.route('/').get(async(_req, res) => {
    var details =[]
    var results = await getData();
    for (let url of results.urls){
        data = await getCar.getCarDetails(url)
        byuing = await buyer.createBuyer()
        result =await contract.creatContract(data,byuing,url)
        dataObj = {
            ownerName : data.owner.name,
            ownerAddress: data.owner.addres,
            ownerContact : data.owner.contact,
            model : data.model,
            make : data.make,
            price : data.price,
            year :data.year,
            milage :data.milage,
            dos : data.dos,
            cc : data.cc,
            byuerName : byuing.name,
            byuerAddress : byuing.address,
            byuerContact : byuing.contact,
            dot: byuing.dot,
            deposit : byuing.deposit,
            dod : byuing.dod, 
            dot : byuing.dot,
            contract :result
        }
        details.push(dataObj)
    }
    fnialRes = await det.createDetilsCsv(details)
    res.status(200).json(details)
});


async function getData(){
    return new Promise(async function(resolve, reject) {
        try{
        rp(url)
        .then(function(html){
            const wikiUrls =[]
            const wikiNames=[] 
            var len =($('ul > li > h2 >  a', html).length);
            for (let i=0; i<len ; i++){
                wikiUrls.push($('ul > li > h2 >  a', html)[i].attribs.href);
                wikiNames.push($('ul > li > h2 >  a', html)[i].attribs.title);
            }
            const data = {
                urls  : wikiUrls,
                Names : wikiNames
            }
            resolve (data)
             })
         }
        catch(err){
            console.error(err)
            return reject(err)
        }
    });
}


module.exports = router;