const express = require("express");
const router = express.Router();
const { getReportsStats } = require('../controllers/ReportsController'); // استدعاء الكنترولر الجديد

// مسار جلب إحصائيات التقارير
router.get("/reports", getReportsStats);

module.exports = router;