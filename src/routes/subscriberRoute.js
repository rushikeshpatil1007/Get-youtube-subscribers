const express = require("express");
const router = express.Router();
const {
  getSubscribers,
  getSubscriberNames,
  getSubscriberById,
} = require("../controllers/subscriberController");

// routes are created for controllers
router.route("/subscribers").get(getSubscribers);
router.route("/subscribers/names").get(getSubscriberNames);
router.route("/subscribers/:id").get(getSubscriberById);

module.exports = router;
