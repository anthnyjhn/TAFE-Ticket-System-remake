import HeaderComp from "../components/Header";

import "../assets/styles/View.css";

const View = () => {
  const RedirectPage = (e) => {
    switch (e.target.value) {
      case "Back to Main Page":
        window.location.href = "http://localhost:5173/";
        break;

      default:
        break;
    }
  };

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
              <td className="tx-id">1</td>
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
            <input
              type="button"
              value="Back to Main Page"
              id="menu-btn"
              onClick={RedirectPage}
            />
          </table>
        </div>
      </div>
    </>
  );
};

export default View;
