require("dotenv").config();

const express = require("express");
const app = express() ;
app.use(express.json());



// const ticketRoute= require("./routes/ticketRoutes")

//test route
// app.post("/IT", (req, res)=>{
//     res.json({
//         msg:"test Route"
//     })
// })

app.get("/", (req,res)=>{
   res.send("Server Working");
});

const connectedDB = require("./config/db");
connectedDB();

const port = process.env.PORT || 3000 ;

const ticketRoutes = require("./routes/ticketRoutes");

app.use("/api", ticketRoutes);

app.listen (port, () =>{
    console.log(`Server Is Running ${port}`)
})