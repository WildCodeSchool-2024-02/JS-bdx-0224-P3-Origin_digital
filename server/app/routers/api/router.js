const express = require("express");

const router = express.Router();

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

const tagRouter = require("./tag/router");

router.use("/tag", tagRouter);


const roleRouter = require("./role/router");

router.use("/role", roleRouter);


const videoRouter = require("./video/router");

router.use("/video", videoRouter);

const userRouter = require("./user/router");

router.use("/user", userRouter);


const authRouter = require("./auth/router");

router.use("/auth", authRouter);

module.exports = router;
