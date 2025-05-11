
exports.getIndex = (req,res,next)=> {
res.render('shop/index',{PageTitle:'Shop Home'});
};
exports.getProducts = (req,res,next)=> {};
exports.getProduct = (req,res,next)=> {};
exports.postCart= (req,res,next)=> {};
exports.getCart= (req,res,next)=> {};
exports.postCartDeleteItem= (req,res,next)=> {};
exports.postOrder= (req,res,next)=> {};
exports.getOrders= (req,res,next)=> {};