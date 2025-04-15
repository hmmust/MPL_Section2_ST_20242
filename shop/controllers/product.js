const getProduct= (req,res)=>{
    res.render('products/addproduct',{title:"Add Product"});
   };
const getIndex= (req,res)=>{
    res.render("home");
   };
const postProduct= (req,res)=>{
    res.render('products/viewproduct',
        {   title:"View Product", 
            n:req.body.name,
            p: req.body.price,
            t: req.body.type
        });
   };
exports.getProduct=getProduct;
exports.postProduct=postProduct;
exports.getIndex=getIndex;