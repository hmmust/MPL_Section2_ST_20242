const mongoose = require("mongoose");
const prodcutSchema = mongoose.Schema({
    name:{ type:String, 
            required:true
         },
    price:{type:Number, min:1},
    type:String,
    description: String,

});
module.exports = mongoose.model("product",prodcutSchema);