import HeaderComp from "../components/Header";

import "../assets/styles/View.css";

const View = () => {
  return (
    <>
      <div className="main">
        <HeaderComp />
        <h2>ICT Service Desk Ticket System</h2>
        <div className="content">
          <table>
            <tr>
              <th>Ticket #</th>
              <th>Client</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Chris Smith</td>
              <td>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                est.
              </td>
              <td>In Progress</td>
              <td>
                <input type="button" value="View" id="view-btn" />{" "}
                <input type="button" value="Delete" id="delete-btn" />
              </td>
            </tr>
            {}
          </table>
        </div>
      </div>
    </>
  );
};

export default View;
