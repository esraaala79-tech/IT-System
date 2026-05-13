import React from "react";
import bglogin from "../../assets/login.png";
import logo from "../../assets/logo.jpg";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <>
      {/* all-parts */}
      <div className="container-fluid p-0">
        <div className="row vh-100 g-0">

          {/* left-part */}
          <div className="col-6 position-relative">
            <img
              className="object-fit-cover w-100 h-100 opacity-50"
              src={bglogin}
              alt=""
            />

            <div className="position-absolute top-50 start-50 translate-middle p-4 text-center text-white ">
              <img className="rounded-5 w-25" src={logo} alt="" />

              <h3 className="fw-bold text-dark py-3">
             HelpDesk Pro
            </h3>

            <p className="text-dark fs-5 mt-3">
            Enterprise IT Service Management. Streamline
            resolution workflows and maintain system health
            metrics with clarity.
            </p>

            </div>
          </div>

          {/* right-part */}
          <div className="col-6">
            
          </div>

        </div>
      </div>
    </>
  );
}

export default LoginForm;