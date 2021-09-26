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
    employee.find({}, function (err, docs){
        employees = docs;
        console.log(docs)
        console.log(err)
    }).then((docs)=>{
        res.render('staff', {"employees":docs});
    })
});

app.get('/contact', function(req,res){
    res.render('contact');
});

app.get('/news', function(req,res){
    const staticNewsArticles = [
        {title:"Study links sleep tracker with improved perception of sleep quality", preview:"A study published in the May issue of the Journal of Clinical Sleep Medicine shows that using a wearable sleep tracker may have a positive impact on the perception of sleep quality. The research, conducted by the University of Arizona Health Sciences Center for Sleep and Circadian Sciences, monitored two weeks of sleep in 32 adults. For the one...", titleLink:"https://aasm.org/study-links-sleep-tracker-with-improved-perception-of-sleep-quality/"},
        {title:"Study suggests saffron supports sleep quality", preview:"A small study published online as an accepted paper in the Journal of Clinical Sleep Medicine found that saffron was associated with improved sleep quality. The randomized controlled trial involved 55 adults with sleep complaints. They were...", titleLink:"https://aasm.org/study-suggests-saffron-supports-sleep-quality/"},
        {title:"Deep learning model can identify sleep stages", preview:"Researchers at the University of Eastern Finland have developed a deep learning model they claim can identify sleep stages as accurately as a sleep physician. The model uses artificial intelligence and neural network architecture to automatically classify sleep stages based...", titleLink:"https://aasm.org/deep-learning-model-can-identify-sleep-stages/"},
        {title:"Consumer Sleep Trackers Accurately Detect Sleep Patterns", preview:"Polysomnography, or PSG, is a comprehensive lab conducted test that tracks brain waves, oxygen levels, heart rate, and movement when sleeping. PSG is often considered the most accurate way to monitor and detect sleep disorders. However, new research in the journal Sleep suggests that many consumer accessible sleep-tracking devices perform just as well in detecting sleep. In fact, the study finds these consumer-oriented...", titleLink:"https://www.sleepfoundation.org/sleep-news/consumer-sleep-trackers-compared-with-polysomnography"},
        {title:"How Danish Scientists Are Changing Sleep Technology", preview:"Sleep staging, the process of dividing sleep quality by different types of sleep, is hugely informative for health professionals, but the process itself is time-consuming and leaves room for error. It can also interfere with natural sleep1 or require hours in a lab. Now, a significant breakthrough in the field has emerged with the help of artificial intelligence...", titleLink:"https://www.sleepfoundation.org/sleep-news/usleep-artificial-intelligence-sleep-technology"},
        {title:"Why Daylight Saving Time Is More Difficult for Night Owls", preview:"While daylight saving time brings us extra sunshine in the warmer months, the lost hour of sleep in the spring can also take away precious time used for sleep and restoration. This shift is often disruptive, but a recent study shows that those who consider themselves night owls are more likely to be negatively affected...", titleLink:"https://www.sleepfoundation.org/sleep-news/daylight-saving-time-more-difficult-for-night-owls"},
    ];
    res.render('news', {newsThings:staticNewsArticles});
});

app.listen(process.env.port || 8080);

console.log('Running at Port 3000');