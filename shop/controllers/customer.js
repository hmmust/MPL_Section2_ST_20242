const getAddCustomer= (req,res)=>{
    res.send("<h1>Hi, Hello World!</h1>");
   };
const getEditCustomer= (req,res)=>{
    res.render("home");
   };

exports.getAddCustomer=getAddCustomer;
exports.getEditCustomer=getEditCustomer;