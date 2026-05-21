import React from "react";
import styles from "./RegisterForm.module.css";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.formBox}>
          <h3 className="fw-bold mb-4"> Register New Employee </h3>

          <form>
            <div className="mb-3">
              <label className={styles.label}> Full Name </label>
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-person-badge"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter employee's full name"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className={styles.label}> Work Email </label>

              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-envelope"></i>
                </span>

                <input
                  type="email"
                  className="form-control"
                  placeholder="employee@company.com"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className={styles.label}> Temporary Password</label>

              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter temporary password"
                />
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <Link to="/employees" className="btn btn-outline-primary px-4">
                CANCEL
              </Link>

              <button type="submit" className="btn btn-primary px-4">
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
