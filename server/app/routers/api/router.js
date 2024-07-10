const express = require("express");

const router = express.Router();

const categoryRouter = require("./category/router");

router.use("/categories", categoryRouter);

const tagRouter = require("./tag/router");

router.use("/tags", tagRouter);

const roleRouter = require("./role/router");

router.use("/roles", roleRouter);
const videoRouter = require("./video/router");

router.use("/videos", videoRouter);

const userRouter = require("./user/router");

router.use("/users", userRouter);


const authRouter = require("./auth/router");

router.use("/auth", authRouter);

module.exports = router;