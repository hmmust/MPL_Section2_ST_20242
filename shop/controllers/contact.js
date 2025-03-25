exports.getContact=(req,res)=>{
    res.render("home");
   };

exports.getIndex=(req,res)=>{
    //connect to database
    
 res.send("<h1>Hi, Hello World!</h1>");
};