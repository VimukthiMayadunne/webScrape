const express = require('express');
var unirest = require("unirest");
const router =express.Router();



router.route('/new').get((req, res) => {
    var results =  getData();
    console.info(results);
    res.send(results)
});


async function getData(){


var req = unirest("GET", "https://riyasewana.com/search");

req.headers({
  "Postman-Token": "ae13fea3-f90c-484e-b90f-13bab9a4a3fe",
  "cache-control": "no-cache"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);
        console.log(res.body);
});
    return res.body   
}

module.exports = router;
