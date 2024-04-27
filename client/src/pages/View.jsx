import React, { useState, useEffect } from "react";
import Axios from "axios";
import HeaderComp from "../components/Header";

import "../assets/styles/View.css";

const View = () => {
  const [ticketData, SetTicketData] = useState([{}]);

  const RedirectPage = (e) => {
    switch (e.target.value) {
      case "Back to Main Page":
        window.location.href = "http://localhost:5173/";
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const GetTicketData = async () => {
      try {
        Axios.get("http://localhost:3000/api/tickets").then((res) => {
          SetTicketData(res.data);
        });
      } catch (err) {
        if (err) throw err;
      }
    };

    GetTicketData();
  }, []);

  const DeleteActionRequest = (tix_id) => {
    try {
      Axios.delete(`http://localhost:3000/api/delete/${tix_id}`).then((res) => {
        console.log(res)
        window.location.href = "http://localhost:5173/tickets"
      })
    } catch (err) {
      if (err) throw err
    }
  };
  const ViewActionRequest = (tix_id) => {
    window.location.href = `http://localhost:5173/view/${tix_id}`;
  };

  const TicketRows = ticketData.map((v, i) => (
    
    <tr key={i}>
      <td className="tx-id">{v.TicketId}</td>
      <td>{v.Assignee}</td>
      <td>{v.Summary}</td>
      <td>{v.Status}</td>
      <td className="action-cell">
        <input
          type="button"
          value="View"
          id="view-btn"
          onClick={() => ViewActionRequest(v.TicketId)}
        />
        <input
          type="button"
          value="Delete"
          id="delete-btn"
          onClick={() => DeleteActionRequest(v.TicketId)}
        />
      </td>
    </tr>
  ));

  return (
    <>
      <div className="main">
        <HeaderComp />
        <h2>ICT Service Desk Ticket System</h2>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Ticket #</th>
                <th>Client</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{TicketRows}</tbody>
          </table>
          <input
            type="button"
            value="Back to Main Page"
            id="menu-btn"
            onClick={RedirectPage}
          />
        </div>
      </div>
    </>
  );
};

export default View;
