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

const edit = async (req, res, next) => {
  const category = { ...req.body, id: req.params.id };
  try {
    await tables.categories.update(category);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const category = req.body;
  try {
    const insertId = await tables.categories.create(category);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.categories.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
