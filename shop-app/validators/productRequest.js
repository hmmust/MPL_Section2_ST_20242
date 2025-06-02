const {validationResult} = require("express-validator");
exports.validateProduct= (req,res,next) => {
    const errors = validationResult(req);
    console.log(errors.isEmpty());
    console.log(errors);
    next();
    
};