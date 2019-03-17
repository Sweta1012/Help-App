var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
     app = express(),
     jwt = require('jsonwebtoken');
    //  var path = require('path'), obj;
    //  const fs = require('fs');


app.use(cors({
    origin:'http://localhost:4200'
}));

mongoose.Promise = require('q').Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/users');
var db = mongoose.connection;

db.on('error', function(){
    console.log('error occured while connecting to mongodb!!!');
});

db.on('open', function(){
    console.log('connection to mongodb established');
});

app.get('/', function(req, res){
   res.send('Welcome');
});

var registered_user = mongoose.Schema({
    firstname: String,
    middlename: String,
    lastname: String,
    email: String,
    password: String,
    address1: String,
    city: String,
    state: String,
    zipcode: Number
});

var users_model = mongoose.model('members', registered_user);

app.post('/savedata', function(req, res){
    
    var users_doc = users_model({
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        address1: req.body.address1,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    });

    users_doc.save(function(err,data){
        if(!err){
            res.json(JSON.stringify(data));
            console.log("User Registration Data saved to the database :)");
        }
        else{
            res.json(err);
            console.log("error while saving registration info");
        }
    });
});

app.post('/checkuser', function(req, res){

        var token = jwt.sign({'uname': req.body.email}, 'my-secret-key', {
            expiresIn: '1h'
        });

        users_model.find({"email": req.body.email, "password":req.body.password},function(err, data) {
            if(err) {
                console.log("Error occurred");
            } else {
                var res_len = data.length;
                if(res_len==0) {
                    res.send({
                        isLoggedIn: false
                    })
                    console.log("No MAtching record found!!");
                    
                } else {
                    res.send({
                        isLoggedIn: true
                    })
                    console.log("user found!!");
                }
            }
        });

});

app.get('/get-products', function(req, res){
    res.send([
        {
          'name': 'product 1',
          'productCode': 1,
          'price': 50,
          'rating': 3.2,
          'releaseDate': '1 Jan 2019',
          'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeK9FzK6HLO0qP3ur_K7FzEfVw2wT_RJ7JcnagvBTuAxzvA7Pq'
        },
        {
          'name': 'product 2',
          'productCode': 2,
          'price': 50,
          'rating': 4.4,
          'releaseDate': '1 Jan 2019',
          'image': 'https://www.freeiconspng.com/uploads/production-icon-26.jpg'
        },
        {
          'name': 'product 3',
          'productCode': 3,
          'price': 50,
          'rating': 4.8,
          'releaseDate': '1 Jan 2019',
          'image': 'https://cdn4.iconfinder.com/data/icons/food-vol-3-2/48/151-512.png'
        },
        {
          'name': 'product 4',
          'productCode': 4,
          'price': 50,
          'rating': 3.9,
          'releaseDate': '1 Jan 2019',
          'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbfFVlLMQIb_jUWt-WItSArHenXc-IK1ahn0YhOBrAS9ZfHKB'
        }
      ]);
});

app.listen(3000, function(){
    console.log('server running @ localhost:3000');
});