const getProduct= (req,res)=>{
    res.render('products/addproduct',{title:"Add Product"});
   };
const getIndex= (req,res)=>{
    res.render("home");
   };
const postProduct= (req,res)=>{
    res.send("Data Received");
   };
exports.getProduct=getProduct;
exports.postProduct=postProduct;
exports.getIndex=getIndex;