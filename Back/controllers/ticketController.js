const Ticket = require("../models/Ticket");
const User = require("../models/User")
const ticketValidation = require("./validation/ticketValidation");

const postTicketController = async (req, res, next) => {
    try {
        // 🔐 check auth
        if (!req.user) {
            return res.status(401).json({ msg: "Unauthorized" });
        }

        const { error, value } = ticketValidation.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        if (error) {
            return res.status(400).json({
                msg: error.details.map((err) => err.message),
            });
        }

        const newTicket = await Ticket.create({
            ...value,
            user: req.user.id,
        });

        return res.status(201).json({
            msg: "Ticket created successfully",
            ticket: newTicket,
        });

    } catch (error) {
        next(error);
    }
};
const getTicket = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json({
            count: tickets.length,
            tickets,
        })

    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const UpdateStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!ticket) {
            return res.status(404).json({ msg: "ticket not found" });
        }
        res.status(200).json({
            msg: "Status Update",
            ticket
        });
            console.log("ticket:", ticket);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const UpdatePeriority = async (req, res, next) => {
    try {
        const { priority } = req.body;
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            { priority },
            { new: true }

        );
        if (!ticket) {
            return res.status(404).json({ msg: "tecket not found" })
        }
        res.status(200).json({ msg: "Periority Update", ticket })

    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const assignedTicket = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        assignedTo: userId,
      },
      {
        new: true,
      }
    )
      .populate("user", "name email")
      .populate("assignedTo", "name email");

    if (!ticket) {
      return res.status(404).json({
        msg: "Ticket not found",
      });
    }

    return res.status(200).json({
      msg: "Ticket assigned successfully",
      ticket,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
    postTicketController, getTicket, UpdateStatus, UpdatePeriority,assignedTicket
};