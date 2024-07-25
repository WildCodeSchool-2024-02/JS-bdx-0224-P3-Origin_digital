const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();
    delete user.password;

    res.json(user);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.auth);
    if (user == null) {
      res.sendStatus(404);
    } else {
      delete user.id;
      delete user.password;
      if (user.siret === "") delete user.siret;
      
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;
  try {
    const insertId = await tables.user.create(user);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.user.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  destroy,
};