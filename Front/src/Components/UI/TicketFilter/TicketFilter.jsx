import React, { useState } from "react";

export default function TicketFilter() {
  const [status, setStatus] = useState("All Status");

  return (
    <div className="container d-flex">
      
      <div className="col-10">
        <div className="position-relative">
          
          <i className="position-absolute top-50 start-0 ms-4 translate-middle fa-solid fa-magnifying-glass"></i>

          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="col-2 text-end">
        <div className="dropdown">
          
          <button
            className="btn btn-light dropdown-toggle px-5 py-1 border border-dark-subtle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {status}
          </button>

          <ul className="dropdown-menu">
            
            <li>
              <button
                className="dropdown-item"
                onClick={() => setStatus("Pending")}
              >
                Pending
              </button>
            </li>

            <li>
              <button
                className="dropdown-item"
                onClick={() => setStatus("In Progress")}
              >
                In Progress
              </button>
            </li>

            <li>
              <button
                className="dropdown-item"
                onClick={() => setStatus("Resolved")}
              >
                Resolved
              </button>
            </li>

            <li>
              <button
                className="dropdown-item"
                onClick={() => setStatus("All Status")}
              >
                All Status
              </button>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}