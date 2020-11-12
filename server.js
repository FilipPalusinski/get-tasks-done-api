require('dotenv').config()

console.log("Server is starting");

const express = require('express');
const { connectionManager } = require('./database/connection');
const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.listen(PORT, listening);

function listening(){
    console.log("listening...")
}

app.use(express.static('website'));

const db = require('./database/connection');
const User = require('./modules/User');

app.post('/addUser', addUser);
function addUser(req, res){
    var name = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    
    db.sync({
        force: true,
        logging:console.log
    }).then(function(){
        return User.create({
            email: email,
            username: name,
            password: password
        });
    }).catch(function(err){
        console.log('There was an error with db sync', err);
    });
}


app.get('/test', sendMsg);

function sendMsg(req, res){
    res.send("Wszystko działa!")

}


