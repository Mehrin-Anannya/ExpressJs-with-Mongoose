const express = require('express');
//accessing locals from different files
//const handle = require('./handle')

//express app initialization
const app = express();
app.locals.title = 'My App';
// app.get('/', (req, res) => {
//     res.send('This is get method.')
// });

// app.post('/', (req, res) => {
//     res.send('This is post method.')
// });

// app.listen(5500, () => {
//     console.log("listening to server port 3000");
// });


// ///app.locals function
// //in this page
// app.get('/', (req, res) => {
//     console.log(app.locals.title);
//     res.send('This is get method.' + app.locals.title);
// });

//in different page
//app.get('/', handle);

//MULTIPLE application object
//mountpath
// const admin = express();
// admin.get('/dashboard', (reg, res) => {
//     res.send("Hello from dashboard. " + admin.mountpath); // returns root path of admin
// });
// app.get('/', (req, res) => {
//     res.send('This is get method.' + app.locals.title);
// });
// app.use('/admin', admin);
// //in the postman check with the following url
// //http://localhost:3000/admin/dashboard
// app.listen(3000, () => {
//     console.log("listening to server port 3000");
//  });


// mount
const admin = express();
admin.on('mount', function (parent) {
  console.log('Admin Mounted')
  console.log(parent); // refers to the parent app
});

admin.get('/', function (req, res) {
    res.send('Admin Homepage')
  });
  
//app.use
  app.use('/admin', admin)
  
  //app.listen
  app.listen(3000, () => {
    console.log("listening to server port 3000");
 });


