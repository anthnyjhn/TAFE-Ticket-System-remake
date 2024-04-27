import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Axios from "axios";

const Ticket = () => {
  const { TicketId } = useParams();

  console.log("Param ticket ID: " + TicketId);

  const formData = useRef(0)

  useEffect(() => {
    console.log("Ticket Id changes");
    const getExistingFormData = async () => {
      try {
        if (TicketId) {
          console.log(`http://localhost:3000/api/ticket/${TicketId}`);
          await Axios.get(`http://localhost:3000/api/ticket/${TicketId}`).then((res)=> {
            formData.current = res.data
          }) ;
          
          DisplayLoadedFormData(); // Call DisplayLoadedFormData here
        }
      } catch (err) {
        if (err) throw err;
      }
    };

    getExistingFormData();
  }, [TicketId]);

  const [assignees, SetAssignees] = useState([{}]);

  const dataInputHandler = (e) => {
    console.log("Input Changed: ", { [e.target.name]: e.target.value });
    formData.current[0][e.target.name] = e.target.value;
    console.log(formData.current)
  };

  const submitHandler = () => {
    console.log(formData);
    try {
      Axios.put("http://localhost:3000/api/update", formData.current).then((req) => {
        console.log(req);
      });
    } catch (err) {
      if (err) throw err;
    }
  };

  useEffect(() => {
    const getAssignees = async () => {
      try {
        await Axios.get("http://localhost:3000/api/admins").then((res) => {
          SetAssignees(res.data);
        });
      } catch (err) {
        if (err) throw err;
      }
    };

    getAssignees();
  }, []);

  const AssigneeOptions = assignees.map((v, i) => (
    <option value={v.Username} key={i}>
      {v.Username}
    </option>
  ));

  const DisplayLoadedFormData = () => {
    if (!formData) {
      return;
    }
    const TicketData = formData.current[0];

    for (const key in TicketData) {
      if (Object.hasOwnProperty.call(TicketData, key)) {
        console.log(key, ": ", TicketData[key]);
        const inputElement = document.getElementById(`issue${key}`);
        if (key != 'TicketId') {
          if (key == "DateLogged" || key == "DateResolved") {
            inputElement.value = TicketData[key].split("T")[0];
          } else {
            inputElement.value = TicketData[key];
          }
        }
      }
    }
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
                required
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
                required
              ></textarea>
            </div>
            <hr />
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="urgency">Urgency</label>
                <select
                  className="form-control"
                  id="issueUrgency"
                  name="Urgency"
                  onChange={dataInputHandler}
                  required
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
                  id="issueImpact"
                  name="Impact"
                  onChange={dataInputHandler}
                  required
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
                  id="issuePriority"
                  name="Priority"
                  onChange={dataInputHandler}
                  required
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
                  type="date"
                  className="form-control"
                  id="issueDateLogged"
                  name="DateLogged"
                  placeholder="today"
                  onChange={dataInputHandler}
                  required
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="assignee">Assignee</label>
                <select
                  className="form-control"
                  id="issueAssignee"
                  name="Assignee"
                  onChange={dataInputHandler}
                  required
                >
                  <option value=""> </option>
                  {AssigneeOptions}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="status">Status</label>
                <select
                  className="form-control"
                  id="issueStatus"
                  name="Status"
                  onChange={dataInputHandler}
                  required
                >
                  <option value=""> </option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Closed">Closed</option>
                </select>

                <div className="form-group col-md-4">
                  <label htmlFor="dueDate">Date Resolved</label>
                  <input
                    type="date"
                    className="form-control"
                    id="issueDateResolved"
                    name="DateResolved"
                    placeholder="today"
                    onChange={dataInputHandler}
                    required
                  />
                </div>
                <hr />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="solution">Solution</label>
              <textarea
                className="form-control"
                id="issueSolution"
                name="Solution"
                rows="3"
                placeholder="Describe the solution provided"
                onChange={dataInputHandler}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comments/Feedback</label>
              <textarea
                className="form-control"
                id="issueFeedback"
                name="Feedback"
                rows="3"
                placeholder="Add any additional comments or notes"
                onChange={dataInputHandler}
                required
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
              Update Ticket
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ticket;
