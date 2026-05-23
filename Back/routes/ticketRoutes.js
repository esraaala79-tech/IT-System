const express = require("express");

const router = express.Router();

const {postTicketController,getTicket,UpdateStatus, UpdatePeriority,assignedTicket} = require('../controllers/TicketController');
const authMiddleware = require("../middleware/authMiddleware");
const { get } = require("mongoose");


router.post("/creatTicket",authMiddleware, postTicketController);
router.get("/tickets" ,getTicket)
router.put("/:id/updateStatus",UpdateStatus)
router.put("/:id/priority",UpdatePeriority)
router.put("/:id/assign", assignedTicket );

module.exports = router;