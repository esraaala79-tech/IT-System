const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
         trim: true
    },

    description: {
        type: String,
        required: true,
         trim: true
    },

    category: {
        type: String,
        enum: ["Hardware", "Software", "Network", "Email", "Access/Permission"],
        default: 'Hardware',
    },

    priority: {
        type: String,
        enum: ["Low", "Medium", "High", "Critical"],
        default: 'Medium',
    },

    image: {
        type: String,
    },
status: {
    type: String,
    enum: ["Pending", "In Progress", "Resolved", "Closed",""],
    default: "Open"
},

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assignedTo:{
           type: mongoose.Schema.Types.ObjectId,
           ref:"User"
    }
}, { timestamps: true })


const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
