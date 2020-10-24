require('dotenv').config()

console.log("server is starting");

var express = require('express');
var app = express();

var PORT = process.env.PORT

app.listen(PORT, listening);

function listening(){
    console.log("listening...")
}

app.use(express.static('website'));

app.get('/test', sendMsg);

function sendMsg(req, res){
    res.send("Wszystko działa!")

}


