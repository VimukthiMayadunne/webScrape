const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const express = require('express');
const $ = require('cheerio');
const router =express.Router();

router.route('/').get((req, res) => {
    var results =  getData();
    //console.info(results);
    res.status(200).json({ Type: 'Presidents' })
});


function getData(){
rp(url)
  .then(function(html){
    console.log($('table > tbody > tr > td > b > a', html).length);
    console.log($('table > tbody > tr > td > b > a', html));
  })
  .catch(function(err){
    console.error(err)
  });

}

module.exports = router;