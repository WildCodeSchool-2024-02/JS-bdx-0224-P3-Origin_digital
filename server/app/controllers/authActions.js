const tables = require("../../database/tables");

const login = async (req, res, next) => {
  const user = req.body;
  try {
    const currentUser = await tables.user.getUserByEmail(user.email);

    res.json(currentUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};  
