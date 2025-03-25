// middleware - routing - folders
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.set("views","views");
const contactcontroller = require('./controllers/contact');
app.get("/",contactcontroller.getIndex);
app.get("/contact",contactcontroller.getContact);


app.listen(8080);