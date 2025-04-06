const getIndex = (req,res)=>{
    res.render("home");
   };
const getContact = (req,res)=>{
    //connect to database
 res.send("<h1>Hi, Hello World!</h1>");
};
const getContactUs = (req,res)=>{
 res.send("Email:<input type='text'><input type='submit' value='Send'>");
};
exports.getIndex=getIndex;
exports.getContact=getContact;
exports.getContactUs=getContactUs;