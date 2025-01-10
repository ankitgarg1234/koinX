// src/routes/apiRoutes.js

const express = require("express");
const router = express.Router();
const { getStats, getDeviation } = require("../controller/apiController");

// Define the /stats route
router.get("/stats", getStats);

// Define the /deviation route
router.get("/deviation", getDeviation);

module.exports = router;
