var express = require("Express");
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;

/* Used to load the static folder and files */
router.use('/', express.static(__dirname + ''));

/* To set the path of the static html file to be served. */
var path = require('path');
var db;
/* Connecting with Mongo DB */
mongoClient.connect('mongodb://localhost:27017/login', (err, database)=>{
    if(err){
        console.log('error occured while retriving');
        return;
    }
    else{
        console.log('Connected to Mongo DB');
    }

    db = database;
    

    
});

/* Handling the default get request */
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

/* Handling the POST request to login */
router.post('/login', function(req, res) {
    
    var username = req.body.username;
    var password = req.body.password;
    var msgSent = "Incorrect Username or Password";
    console.log(password);
    var user = db.collection('user');
    user.find({'username': username}).toArray(function(err, docs) {
        var userObject = docs[0];
        if(userObject){
            console.log(userObject.password);
            if(userObject.password === password){
                msgSent = 'User details present';
                res.send(msgSent);
            }
            else{
                msgSent = "Incorrect Username or Password";
                res.send(msgSent);
            }
        }
        
    })
    
    
});


module.exports = router;