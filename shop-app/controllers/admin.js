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
    res.redirect("/admin/products");
};

exports.getEditProduct= (req,res,next)=> {
    ProdId= req.params.ProductId;
    product.findById(ProdId).then((p)=>{
        res.render('admin/edit-product',{PageTitle:'Shop Home',
            product:p
        });

    });
};
exports.postEditProduct= (req,res,next)=>{
    n=req.body.name;
    t=req.body.type;
    pr=req.body.price;
    d=req.body.descripton;
    id= req.body.id;
    product.findById(id).then((p)=>{
        p.name= n;
        p.type=t;
        p.descripton=d;
        p.price=pr;
        p.save().then((p)=>{
            res.redirect("/admin/products");
        });

    });
};
exports.postDeleteProduct= (req,res,next)=>{
    product.findByIdAndDelete(req.body.id ).then((p)=>{
        res.redirect("/admin/products");
    });
};
exports.getProducts = (req,res,next)=> {
    product.find().then((p)=>{
        res.render('admin/list-products',{PageTitle:'Shop Home',products:p});
    })
    

};