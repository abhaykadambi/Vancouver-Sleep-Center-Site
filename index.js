const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const employee = require('./models/employee');
app.set('view engine', 'ejs');
app.use(express.static('public'))
mongoose.connect(process.env.DATABASEURL, {useNewUrlParser: true}).then(()=>{
    console.log("gabagooh")
});

app.get('/',function(req,res){
    res.render('index');
    // var theDATA = new employee({name:"beans", imageLink:"https://pbs.twimg.com/profile_images/1304440273074872321/FtExL776_400x400.jpg", position:"stinky", bio:"stinky binky", personalLink:"https://github.com/abhaykadambi"})
    // theDATA.save().then(()=>{
    //     console.log('babushka')
    // })
});

app.get('/services', function(req,res){
    res.render('service');
});

app.get('/staff', function(req,res){
    var employees = {};
    employee.find({}, function (err, docs){
        employees = docs;
        console.log(docs)
        console.log(err)
    }).then(()=>{
        res.render('staff', {"employees":employees});
    });
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');