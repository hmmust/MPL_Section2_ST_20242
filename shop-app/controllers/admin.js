const product = require("../models/product");

exports.getAddProduct= (req,res,next)=> {
    res.render('admin/add-product',{PageTitle:'Shop Home'});
};
exports.postAddProduct= (req,res,next)=>{
    n=req.body.name;
    t=req.body.type;
    p=req.body.price;
    d=req.body.descripton;
    const newProduct = product({name:n, price:p,type:t, descripton:d});
    newProduct.save();

    res.render('admin/add-product',{PageTitle:'Shop Home'});
};

exports.getEditProduct= (req,res,next)=> {};
exports.postEditProduct= (req,res,next)=>{};
exports.postDeleteProduct= (req,res,next)=>{};
exports.getProducts = (req,res,next)=> {
    product.find().then((p)=>{
        res.render('admin/list-products',{PageTitle:'Shop Home',products:p});
    })
    

};