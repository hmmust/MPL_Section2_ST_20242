const {validationResult} = require("express-validator");
exports.validateProduct= (req,res,next) => {
    const errors = validationResult(req);
    if(errors.isEmpty())
        next();
    
    else{
        let old_data = {name:req.body.name,
            price:req.body.price,
            type:req.body.type,
            descripton:req.body.descripton
        }
        let error_messages = [];
        for(let e of errors.errors)
            error_messages.push(e.msg);
        // console.log(errors.errors[0].msg);
        // console.log(errors.errors[1].msg);
        console.log(error_messages);
        req.flash('add_errors',{old_data:old_data,
            error_messages:error_messages})
        res.redirect("/admin/add-product");
    }
    
    
};