const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/categoryActions");

router.get("/", browse);

router.get("/:id", read);

router.put("/:id", edit);

router.post("/", add);

router.delete("/:id", destroy);

module.exports = router;
