const getProduct= (req,res)=>{
    res.send("<h1>Hi, Hello World!</h1>");
   };
const getIndex= (req,res)=>{
    res.render("home");
   };

exports.getProduct=getProduct;
exports.getIndex=getIndex;