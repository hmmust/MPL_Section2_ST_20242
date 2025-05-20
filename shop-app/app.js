const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/mpl2").then((a)=>{
  console.log("connected to mpl2 database ... ")
});
const bodyParser=require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
const shopRouter = require('./routes/shop');
app.use(shopRouter);

const authRouter = require('./routes/auth');
app.use(authRouter);

const adminRoutes=require('./routes/admin');
app.use('/admin',adminRoutes);
const errorController=require('./controllers/errors');
app.use(errorController.get404);
app.listen(8080);