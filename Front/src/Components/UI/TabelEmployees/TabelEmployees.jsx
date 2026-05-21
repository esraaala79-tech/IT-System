import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./TabelEmployees.module.css";

export default function TabelEmployees() {
  const [status, setstatus] = useState("Active");
  const [role, setRole] = useState("Employee");

  return (
    <>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-3 bg-white"></div>

            <div className={`col-9  ${Style.grayBackground}`}>
              <div className="d-flex align-items-center justify-content-between py-3 ">
                <h1>Users List</h1>

                <Link
                  to="add"
                  className={`bt d-flex align-content-center text-center gap-2 text-white bg-primary rounded-2 px-2 py-2 ${Style.btn}`}
                >
                  <p>+ADD NEW USER</p>

                  <i className={`${Style.icon} fa-solid fa-user`}></i>
                </Link>
              </div>

              <table className="table">
                <thead>
                  <tr className={Style.head1}>
                    <th scope="col">ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Status</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">1</th>

                    <td>Mark</td>

                    <td>Otto@gmail.com</td>

                    <td>
                      <button className={`${Style.role} btn rounded-5`}>
                        {role}
                      </button>
                    </td>

                    <td>
                      <button
                        className={`btn rounded-5 ${
                          status === "Active"
                            ? "btn-success"
                            : "btn-danger"
                        }`}
                      >
                        {status}
                      </button>
                    </td>

                    <td>
                      <div className="d-flex gap-2 align-content-center text-center justify-content-center py-2 border border-0">
                        <button
                          className="border-0 bg-white"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>

                        <button className="border border-0 bg-white">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}