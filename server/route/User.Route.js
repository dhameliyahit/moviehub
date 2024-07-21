const express = require("express");
const { AddAdminController, GetAllAdminsController } = require("../controller/User.Controller");

const router = express.Router();

// add admin
router.post("/add/new",AddAdminController)
// all user
router.get("/all/admins",GetAllAdminsController)

module.exports = router;