const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.categories.readAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const category = await tables.categories.read(req.params.id);
    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
