const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 8000;

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
    next();
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.use('/getdata',require('./routes/getData'));
app.use('/getcars',require('./routes/getCars'));
app.use('/getpre',require('./routes/getPresidents'),express.static('public'));

var server = require('http').Server(app); 


server.listen(port,function(){
    console.log("Listning on Port 8000");
});