import { useState } from "react";
import Styles from "./EmployeeForm.module.css";

export default function EmployeeForm({ addTicket }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      title,
      status: "Pending",
      priority: "Medium",
      date: new Date().toISOString().split("T")[0],
    };

    addTicket(newTicket);

    setTitle("");
  };

  return (
    <>
      <div className="card p-5 shadow">
        <h2 className="fw-bold mb-4">Create New Ticket</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="py-3 ps-3 form-control"
                id="exampleInputEmail1"
                placeholder="Title*"
                aria-describedby="emailHelp"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="title">Title*</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Detailed Describtion*"
                id="floatingTextarea2"
                style={{ height: "200px" }}
              ></textarea>

              <label htmlFor="floatingTextarea2">
                Detailed Describtion*
              </label>
            </div>

            <div className="d-flex py-3 gap-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue="6">Hardware</option>
                <option value="1">Software</option>
                <option value="2">Network</option>
                <option value="3">Email</option>
                <option value="4">Access/Permissions</option>
                <option value="5">Other</option>
              </select>

              <select
                className="form-select p-3"
                aria-label="Default select example"
              >
                <option value="1">Low</option>
                <option defaultValue="4">Medium</option>
                <option value="2">High</option>
                <option value="3">Critical</option>
              </select>
            </div>

            <div className="p-3">
              <label className={`${Styles.uploadBox} me-3`}>
                <input type="file" onChange={handleChange} hidden />
                Choose File
              </label>

              {file && (
                <p className="mt-2">
                  Selected file: {file.name}
                </p>
              )}

              <span className="opacity-75 mt-3">
                Drag and drop files here or click to browse
              </span>
            </div>
          </div>

          <button
            type="submit"
            className={`${Styles.btngrey} fs-5 btn w-100 py-3 mt-4`}
          >
            SUBMIT TICKET
          </button>
        </form>
      </div>
    </>
  );
}