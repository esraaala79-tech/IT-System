import React, { useState } from "react";

export default function TicketTable() {
  const [status, setStatus] = useState("In Progress");
  const [priority, setPriority] = useState("Medium");

  return (
    <div className="container d-flex justify-content-end">
      <table className="table py-4 mt-4 table-borderless align-middle table-hover">
        <thead>
          <tr className="table-light">
            <th scope="col">IT</th>
            <th scope="col">Subject</th>
            <th scope="col">Status</th>
            <th scope="col">Priority</th>
            <th scope="col">Category</th>
            <th scope="col">Assigned To</th>
            <th scope="col">Submitted By</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="align-middle">
            <td>TKT-001</td>
            <td>Email not syncing on mobile</td>

            <td>
              <span
                className={`btn ${
                  status === "In Progress"
                    ? "bg-primary"
                    : status === "Pending"
                    ? "bg-warning"
                    : status === "Resolved"
                    ? "bg-success"
                    : "bg-secondary"
                } rounded-pill`}
              >
                {status}
              </span>
            </td>

            <td>
              <span
                className={`badge rounded-pill ${
                  priority === "Low"
                    ? "bg-success"
                    : priority === "Medium"
                    ? "bg-primary"
                    : priority === "High"
                    ? "bg-warning text-dark"
                    : "bg-danger"
                }`}
              >
                {priority}
              </span>
            </td>

            <td>Email</td>
            <td>John Smith</td>
            <td>Sarah Johnson</td>

            <td>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle px-1 py-1 border border-dark-subtle"
                  type="button"
                  data-bs-toggle="dropdown"
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
                      onClick={() => setStatus("Closed")}
                    >
                      Closed
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}