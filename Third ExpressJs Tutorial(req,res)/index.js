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
const adminRoute = express.Router();
app.use(express.json());
//baseURL: The URL at which the project is mounted
// adminRoute.get('/dashboard', (req, res) => {
//     console.log(req.baseUrl);
//     res.send('We are in the admin');
// });
// app.use('/admin', adminRoute);


//req.originalURL
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//      console.log(req.originalUrl);
// //         res.send('Get Method');
// //     }) ;
//app.post
app.post('/user/', (req,res) => {
    console.log(req.body);
    res.send("Post method is working");
});
//app.listen
app.listen(3000, () => {
    console.log('listening to port 3000');
});
