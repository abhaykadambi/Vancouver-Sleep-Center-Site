const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/',function(req,res){
    res.render('index');
});
//add the router

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');