const mongoose = require ("mongoose");

const ticketSchema = new mongoose.Schema({

    title: {
        type: String ,
        required : true , 
    },

    description: {
    type: String ,
    required : true , 
    },

    category : {
    type: String ,
    enum : ["Hardware", "Software", "Network", "Email", "Access/Permission"],
    default: 'Hardware',
    },

    priority : {
    type: String ,
    enum : ["Low", "Meduim", "High", "Critical"],
    default: 'Meduim',
    },

    image:{
        type:String,
    },

    isCompleted :{
       type: Boolean,
       default: false,
    },

    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // }
},{timestamps:true})


const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports= Ticket;
