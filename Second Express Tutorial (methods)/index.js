const express = require('express');
const app = express();

//app.all
// app.all('/', (req, res) => {
//     res.send('Hello from all methods');
// });

//app.delete 

//app.enable & app.disable
//app.enable('case sensitive routing');
//app.disable('case sensitive routing');

// app.all('/about', (req, res) => {
//     res.send('Hello from all methods');
// });

//app.disabled() and appp.enabled() returns true and false vice-versa

//app.set and app.get()
//app.set('title', 'Test the set get function');
//console.log(app.get('title'));

//app.method : app.get(), app.post, app.put, app.delete
//app.use previous folder

//app.param (it works as a middleware)
// app.param('id', (req,res,next, id) => {
//     const user = {
//         userid : 1,
//         paramname :'Bangladesh'
//     }
//     req.userdetails = user;
//     next();
// });
// app.get('/user/:id', function (req, res) {
//     res.send(req.userdetails);
//   });

//app.path() :follow from the documentation

// //app.route
// app.get('/about/test', function (req, res) {
//     res.send(req.userdetails);
// });
// app.post('/about/test', function (req, res) {
//     res.send(req.userdetails);
// });
// app.put('/about/test', function (req, res) {
//     res.send(req.userdetails);
// });

//simplifying the above url
// app.route('/about/test') //it works as a main url
//     .get((req,res)=>{
//         res.send("testing the get");
//     }) 
//     .post((req,res)=>{
//         res.send("testing the post");
//     }) 
//     .put((req,res)=>{
//         res.send("testing the put");
//     });

//template engine and app.render
app.set('view engine', 'ejs'); //check app.settings.table to know it
app.route('/about/test') //it works as a main url
    .get((req,res)=>{
        res.render('pages/about');
    }) 
    .post((req,res)=>{
        res.render('pages/about');
    }) 
    .put((req,res)=>{
        res.send("testing the put");
    });


//app.listen
app.listen(3000, () => {
    console.log('listening to port 3000');
});