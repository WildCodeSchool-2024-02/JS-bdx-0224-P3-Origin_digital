const userCheckRole = (req,res,next) => {
    if (req.body.siret) {
      req.body.roleId = 3;
      next();
    } else {
      req.body.roleId = 2;
      req.body.siret = "";
      next();
    }
}
module.exports = userCheckRole;