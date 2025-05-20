const user = require("../models/user");

exports.getLogin= (req,res,next)=> {
    res.render('auth/login',{PageTitle:'Login',
        invalid:false});
};
exports.postLogin= (req,res,next)=>{
     uname = req.body.username;
     upass= req.body.password;
     //console.log(uname,upass);
     user.find({username:uname,password:upass}).then((u)=>{
        if(u.length != 0){
            req.session.iAuth = true;
            res.redirect("/admin/products");
        }
        else
        res.render('auth/login',{PageTitle:'Login',
        invalid:true});
     })
    };
exports.getLogout = (req,res,next)=> {
    req.session.destroy();
    res.redirect("/");

};