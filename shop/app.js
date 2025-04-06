// middleware - routing - folders
const express = require("express");
const contactRouter = require("./routes/contact");
const productRouter = require("./routes/product");
const errorRouter = require("./routes/errors");
const app = express();
app.set("view engine","ejs");
app.set("views","views");

app.use(contactRouter); 
app.use(productRouter); 

app.use(errorRouter);

app.listen(8080);