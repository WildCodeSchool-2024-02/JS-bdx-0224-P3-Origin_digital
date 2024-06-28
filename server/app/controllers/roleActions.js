const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const role = await tables.role.readAll();
    res.json(role);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const role = await tables.role.read(req.params.id);
    if (role == null) {
      res.sendStatus(404);
    } else {
      res.json(role);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
