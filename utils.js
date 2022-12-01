function requireUser(req,res,next){
    if(!req.user){
        next({
            name:"MissingUser",
            message:"Login!!!!"
        });
    }
    next();
}
module.exports={requireUser}