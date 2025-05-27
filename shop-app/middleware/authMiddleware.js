
exports.isAuthenticated = (req,res,next) =>
{ 
    if(req.session.isAuth)
        next();
    else
    {   req.flash("loginerror","Access Denied, you have to login!" )
        res.redirect("/login");
        }
};