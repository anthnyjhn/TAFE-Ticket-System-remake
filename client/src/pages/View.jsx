import HeaderComp from "../components/Header";
import Footer from "../components/Footer";

import "../assets/styles/View.css";

const View = () => {
  return (
    <>
      <div className="main">
        <HeaderComp />
        <h2>ICT Service Desk Ticket System</h2>
        <div className="content">
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
            <td>Computer slow and noisy</td>
            <td>In Progress</td>
            <td>
              <input type="button" value="View" id="view-btn" />{" "}
              <input type="button" value="Delete" id="delete-btn" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Chris Smith</td>
            <td>Computer slow and noisy</td>
            <td>In Progress</td>
            <td>
              <input type="button" value="View" id="view-btn" />{" "}
              <input type="button" value="Delete" id="delete-btn" />
            </td>
          </tr>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default View;
