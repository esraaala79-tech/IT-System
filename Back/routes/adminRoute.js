const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/roleMiddleware");
const addUser = require("../controllers/AdminController")
router.post("/", addUser);

module.exports=router