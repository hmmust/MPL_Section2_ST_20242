const productRouter= require('./routes/product');
const errorRouter = require('./routes/errors');
const path = require('path');
const bodyparser = require('body-parser');
const express = require("express");
const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/hossamshop").then((r)=>{
 console.log("Connected to hossamshop database... ");

});

const app = express();
app.set("view engine","ejs");
app.set("views","views");
app.use(bodyparser({urlencoded:false}));
app.use("/resources",express.static(path.join(__dirname,'public')));
app.use("/product",productRouter);
app.use(errorRouter);
app.listen(8080);