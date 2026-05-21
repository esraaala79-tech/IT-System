import React from "react";
import TicketFilter from "../../Components/UI/TicketFilter/TicketFilter";
import TableTicket from "../../Components/UI/TabelTicket/TabelTicket";
export default function Tickets() {
  return (
    <div className="container p-4">
      <h1 className="fw-bold mb-4">Ticket Management</h1>

      <TicketFilter />
      
      <TableTicket />
    </div>
  );
}