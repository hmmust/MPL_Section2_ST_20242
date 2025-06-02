const {body} = require("express-validator");
module.exports= productRules = { 
    add:[
        body("name")
        .trim()
        .isEmpty()
        .isLength({min:10,max:500})
        .withMessage("Name should be with length  10 to 500 "),
        body("price")
        .trim()
        .isFloat({min:0.5,max:100})
        .withMessage("Price should be from 0.5 to 100!")
    ]
};