import React, { useState } from "react";
import Header from "../components/Header";
import "../assets/styles/Log.css";

const Log = () => {
  const [formData, setFormData] = useState({
    Summary: "",
    Description: "",
    ComputerId: "",
    Department: "",
    Urgency: "",
    Impact: "",
    Priority: "",
    DateLogged: "",
    Assignee: "",
    Status: "",
    DateResolved: "",
    Solution: "",
    Feedback: "",
  });

  const dataInputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    console.log("triggered");
    console.log(formData);
    console.log(e);
  };

  return (
    <>
      <div className="main">
        <Header />
        <h2>ICT Service Desk Ticket System</h2>
        <div className="content">
          <form>
            <div className="form-group">
              <label htmlFor="issueSummary">Summary</label>
              <input
                type="text"
                className="form-control"
                id="issueSummary"
                name="Summary"
                placeholder="Enter a brief summary of the issue"
                onChange={dataInputHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="issueDescription">Description</label>
              <textarea
                className="form-control"
                id="issueDescription"
                name="Description"
                rows="3"
                placeholder="Describe the IT issue in detail"
                onChange={dataInputHandler}
              ></textarea>
            </div>
            <hr />
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="urgency">Urgency</label>
                <select
                  className="form-control"
                  id="urgency"
                  name="Urgency"
                  onChange={dataInputHandler}
                >
                  <option value=""> </option>
                  <option value="minor">Minor</option>
                  <option value="standard">Standard</option>
                  <option value="major">Major</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="impact">Impact</label>
                <select
                  className="form-control"
                  id="impact"
                  name="Impact"
                  onChange={dataInputHandler}
                >
                  <option value=""> </option>
                  <option value="individual">
                    Individual: Affects the individual user only
                  </option>
                  <option value="moderate">
                    Moderate: Affects a whole department or team
                  </option>
                  <option value="significant">
                    Significant: Affects a VIP user (Executive)
                  </option>
                  <option value="extensive">
                    Extensive: Affects the whole organisation
                  </option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="priority">Priority</label>
                <select
                  className="form-control"
                  id="priority"
                  name="Priority"
                  onChange={dataInputHandler}
                >
                  <option value=""> </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>
            <hr />

            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="dueDate">Date Logged</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="dueDate"
                  name="DateLogged"
                  placeholder="today"
                  onChange={dataInputHandler}
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="assignee">Assignee</label>
                <input
                  type="text"
                  className="form-control"
                  id="assignee"
                  name="Assignee"
                  placeholder="Assign the issue to - your name & student number"
                  onChange={dataInputHandler}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="status">Status</label>
                <select
                  className="form-control"
                  id="status"
                  name="Status"
                  onChange={dataInputHandler}
                >
                  <option value=""> </option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Closed">Closed</option>
                </select>

                <div className="form-group col-md-4">
                  <label htmlFor="dueDate">Date Resolved</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="dueDate"
                    name="DateResolved"
                    placeholder="today"
                    onChange={dataInputHandler}
                  />
                </div>
                <hr />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="solution">Solution</label>
              <textarea
                className="form-control"
                id="solution"
                name="Solution"
                rows="3"
                placeholder="Describe the solution provided"
                onChange={dataInputHandler}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comments/Feedback</label>
              <textarea
                className="form-control"
                id="comments"
                name="Feedback"
                rows="3"
                placeholder="Add any additional comments or notes"
                onChange={dataInputHandler}
              ></textarea>
            </div>
            <hr />
            <button
              type="button"
              className="btn-primary"
              data-toggle="modal"
              data-target="#saveModal"
              onClick={submitHandler}
            >
              Create Issue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Log;
