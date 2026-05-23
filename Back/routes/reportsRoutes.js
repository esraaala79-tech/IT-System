const express = require("express");
const router = express.Router();
const { getReportsStats } = require('../controllers/ReportsController'); 

router.get("/reports", getReportsStats);

module.exports = router;