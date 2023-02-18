const express = require('express');
const mongoose = require('mongoose');
//express app initialization
const app = express();

//to receive data in json format
app.use(express.json());

//database connection with mongoose
mongoose
    .connect('mongodb://localhost/ecommerce',
    {useNewUrlParser: true, useUnifiedTopology:true})
    //it works in an asynchoronous way returning a promise
    .then(() => console.log('connection successful'))
    .catch(err => console.log(err));
    mongoose.set('strictQuery', true);
//application routes

//default error handler
function errorhandler(err,req,res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error:err});
}

  //app.listen
  app.listen(3002, () => {
    console.log("listening to server port 3000");
 });
