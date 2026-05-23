import React from "react";
import styles from "./ReportChart.module.css";
export default function ReportChart({ title, children }) {
  
  return (
    <div className="col-12 col-lg-4">
      <div className="card border-0 shadow-sm p-3 h-100">
        <h5 className="fw-bold text-center text-dark mb-3">{title}</h5>
        <div className={`${styles.chartContainer} `}>
          {children}
        </div>
      </div>
    </div>
  );
}