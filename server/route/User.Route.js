const express = require("express");
const { AddAdminController } = require("../controller/User.Controller");

const router = express.Router();

router.post("/add/new",AddAdminController)

module.exports = router;