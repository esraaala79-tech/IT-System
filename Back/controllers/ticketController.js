const Ticket = require ("../models/Ticket")

const ticketValidation  = require("./validation/ticketValidation")

const postTicketController = async (req, res, next)=>{
    try{
     const {error, value} = ticketValidation.validate (req.body,{
        abortEarly: false,
        stripUnknown: true,

     });
     if(error){
        return res.status(400).json({
            msg: error.details.map((err)=> err.message),
        });
     }
     const title = value.title;
         const newTicket = await Ticket.create( {
          ...value,
            //  user: userId
         });

    //  const userId =req.user;

   
     
     res.status(201).json({
        msg:"Done Created New Ticket",
     });
    }catch(error){
        next(error);

    }
};

module.exports ={
postTicketController,
};