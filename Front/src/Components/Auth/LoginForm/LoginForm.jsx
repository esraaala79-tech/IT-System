import React from "react";
import bgImage from "../../../assets/login.png";
import logo from "../../../assets/logo.jpg";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0 vh-100">

        {/* LEFT SIDE */}
        <div className={`col-md-6 position-relative overflow-hidden ${styles.leftSide}`}>

          <img src={bgImage} alt="login" className= 'w-100 h-100 object-fit-cover ' />
          <div className={styles.overlay}></div>

          <div className={`position-absolute top-50 start-50 translate-middle text-center ${styles.leftContent}`}>
            <img src={logo} alt="logo" className= {styles.logo} />

            <h1 className={`fw-bold ${styles.title}`}> HelpDesk Pro</h1>

            <p className={styles.description}> Enterprise IT Service Management. Streamline resolution workflows and maintain system health metrics with clarity.</p>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className={`col-md-6 d-flex justify-content-center align-items-center ${styles.rightSide}`}>
          <div className={styles.formContainer}>

            <h2 className="fw-bold mb-2">Access Portal</h2>
            <p className="text-muted mb-5"> Enter your credentials to manage tickets.</p>

            <form>

              
              <div className="mb-4">
               <label className={styles.label}>EMAIL ADDRESS </label>
                <div className="input-group">
                  <span className={`input-group-text bg-white  ${styles.icon}`}>
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email" className={`form-control border-start-0 py-2 ${styles.input}`}
                    placeholder="user@organization.com"
                  />
                </div>
              </div>


              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <label className={styles.label}> PASSWORD </label>
                  <a  href="#" className={styles.forgot}>Forgot Password? </a>
                </div>

                <div className="input-group">
                  <span className={`input-group-text bg-white  ${styles.icon}`}>
                    <i className="bi bi-lock"></i>
                  </span>

                  <input type="password" className={`form-control border-start-0  py-2 ${styles.input}`} 
                  placeholder="***********"
                  />

                  <span className={`input-group-text bg-white  ${styles.icon}`}>
                    <i className="bi bi-eye-slash"></i>
                  </span>
                </div>
              </div>

              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" 
                />

                <label className={`form-check-label ${styles.remember}`} htmlFor="remember">
                  Remember my device
                </label>
              </div>

              <button type="submit" className={`btn btn-primary w-100 ${styles.button}`}>
                SIGN IN
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </form>

            
            <div className={styles.footer}> <p className="text-muted small mb-1"> Secured by Enterprise SSO.</p>
              <p className="small"> Need provisioning? <a href="#" className={styles.contact}> Contact Admin </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;