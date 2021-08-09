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
        {title:"New Study Shows Insomnia More Common in COVID-19 Survivors", preview:"A study published by Lancet Psychiatry finds that insomnia may be one of the most common neurological and psychiatric outcomes from COVID-19. Researchers evaluated the electronic health records of TriNetX, a global health research network, for approximately 236,000 patients, 10 years of age and older, who tested positive for COVID-19 from January 20, 2020 and were...", titleLink:"https://www.sleepfoundation.org/sleep-news/new-research-insomnia-and-covid-19"},
        {title:"Ignoring Your Body Clock May Put You At Risk For Depression", preview:"For some, mornings are a time for productivity and alertness. In fact, many elements of daily life are designed to accommodate those who enjoy an early start—including the typical 9-5 working schedule. Others find this routine challenging and exhausting, due to their natural...", titleLink:"https://www.sleepfoundation.org/sleep-news/misaligned-circadian-rhythm-leads-to-depression"},
        {title:"Sleep Preferences Linked to Personality Types", preview:"Extrovert or introvert, big idea or detail-oriented, artistic or analytical — all of these traits and more are ways that humans’ personalities differ from one another. The amount of research that has gone into why humans act the way they do is extensive, but a new study adds another layer to the mystery of human nature — sleep preferences...", titleLink:"https://www.sleepfoundation.org/sleep-news/link-between-personality-sleep-genetics-discovered"},
        {title:"Consumer Sleep Trackers Accurately Detect Sleep Patterns", preview:"Polysomnography, or PSG, is a comprehensive lab conducted test that tracks brain waves, oxygen levels, heart rate, and movement when sleeping. PSG is often considered the most accurate way to monitor and detect sleep disorders. However, new research in the journal Sleep suggests that many consumer accessible sleep-tracking devices perform just as well in detecting sleep. In fact, the study finds these consumer-oriented...", titleLink:"https://www.sleepfoundation.org/sleep-news/consumer-sleep-trackers-compared-with-polysomnography"},
        {title:"How Danish Scientists Are Changing Sleep Technology", preview:"Sleep staging, the process of dividing sleep quality by different types of sleep, is hugely informative for health professionals, but the process itself is time-consuming and leaves room for error. It can also interfere with natural sleep1 or require hours in a lab. Now, a significant breakthrough in the field has emerged with the help of artificial intelligence...", titleLink:"https://www.sleepfoundation.org/sleep-news/usleep-artificial-intelligence-sleep-technology"},
        {title:"Why Daylight Saving Time Is More Difficult for Night Owls", preview:"While daylight saving time brings us extra sunshine in the warmer months, the lost hour of sleep in the spring can also take away precious time used for sleep and restoration. This shift is often disruptive, but a recent study shows that those who consider themselves night owls are more likely to be negatively affected...", titleLink:"https://www.sleepfoundation.org/sleep-news/daylight-saving-time-more-difficult-for-night-owls"},
    ];
    res.render('news', {newsThings:staticNewsArticles});
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');