const express = require("express");
const { createNotification } = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");
const NotificationRouter = express.Router();

NotificationRouter.route("/").post(protect, createNotification);

module.exports = NotificationRouter;
