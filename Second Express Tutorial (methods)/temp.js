//req.baseUrl
//req.originalUrl
//req.path
//req.hostname
//req.ip
//req.method
//req.protocol
//req.params
//req.query
//req.cookies
//req.signedCookies
//req.secure

const express = require('express');
const app = express();
//admin.get('/dashboard', re, 2)
//app.set('view engine', 'ejs'); //check app.settings.table to know it
app.get('/about/test', (req, res) => {
 //it works as a main url
        console.log(req.baseUrl);
        res.render('Get Method');
    }) ;
  
//app.listen
app.listen(3000, () => {
    console.log('listening to port 3000');
});
