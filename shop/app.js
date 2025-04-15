const productRouter= require('./routes/product');
const errorRouter = require('./routes/errors');
const bodyparser = require('body-parser');
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.set("views","views");
app.use(bodyparser({urlencoded:false}));
app.use(productRouter);
app.use(errorRouter);

app.listen(8080);