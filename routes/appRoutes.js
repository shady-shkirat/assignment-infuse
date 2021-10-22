const express = require("express");
const appController = require("../controllers/appController");

const router = express.Router();

router.route("/data").post(appController.checkBody, appController.createTicket);
router.route("/app").get(appController.getAppPage);

module.exports = router;
