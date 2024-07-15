const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tag = await tables.tag.readAll();
    res.json(tag);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const tag = await tables.tag.read(req.params.id);
    if (tag == null) {
      res.sendStatus(404);
    } else {
      res.json(tag);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const tag = { ...req.body, id: req.params.id };
  try {
    await tables.tag.update(tag);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const tag = req.body;
  try {
    const insertId = await tables.tag.create(tag);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.tag.delete(req.params.id);
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
