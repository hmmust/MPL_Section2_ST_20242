const express = require("express");
const app = express();

app.get("/",(req,res)=>{
 res.send("<h1>Hi, Hello World!</h1>");
});

app.listen(8080);