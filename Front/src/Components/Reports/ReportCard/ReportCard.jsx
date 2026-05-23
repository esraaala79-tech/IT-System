import React from "react";

export default function ReportCard({ title, value, textColor = "text-dark" }) {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="card h-100 border-0 shadow-sm p-3">
        <span className="text-muted fw-semibold small">{title}</span>
        <h1 className={`display-4 fw-bold m-0 mt-2 ${textColor}`}>
          {value}
        </h1>
      </div>
    </div>
  );
}