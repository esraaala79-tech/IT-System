const express = require("express");

const router = express.Router();

const {postTicketController} = require('../controllers/TicketController');

router.post("/Ticket",postTicketController);

module.exports = router;