const userCheckRole = (req,res,next) => {
    if (req.body.siret.length>0){
        req.body.roleId=3;
        next();
    }else {
        req.body.roleId=2;
        next();
    }
}
module.exports = userCheckRole;