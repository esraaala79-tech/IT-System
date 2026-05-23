const router = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const addUser = require("../controllers/AdminController");

// create user (admin only)
router.post("/CreatUser", authMiddleware, roleMiddleware, addUser);

module.exports = router;