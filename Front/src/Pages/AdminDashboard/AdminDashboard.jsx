import { useState } from "react"
import EmployeeForm from "../../Components/Employees/EmployeeForm/EmployeeForm"
import EmployCard from "../../Components/Employees/EmployeeCard/EmployeeCard"


export default function EmployeeDashboard() {
const [tickets ,setTickets] =useState([]);

const addTicket = (ticket)=>{
setTickets ([...tickets,ticket]);
};

  return (


<div className="container  d-flex  justify-content-center min-vh-100 align-items-center my-5">

     <div className="row g-5 justify-content-center w-100">
      <div className="col-md-8" >
        <EmployeeForm addTicket={addTicket}/>
      </div>
      <div className="col-md-4" >
        <EmployCard tickets={tickets}/>
      </div>
    </div>
     </div>
  )
 
   
}
