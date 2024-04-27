import React from "react";
import Header from "../components/Header";

import '../assets/styles/Home.css'

function Home() {
    
  const PageRedirection = (e) => {
    switch (e.target.value) {
      case "Log Ticket":
        window.location.href = "http://localhost:5173/log"
        break;
      case "View Tickets":
        window.location.href = "http://localhost:5173/tickets"
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="main">
        <Header />
        <h2>ICT Service Desk Ticket System</h2>
        <div className="action-buttons">
          <input type="button" value="Log Ticket" onClick={PageRedirection} id="log"/>
          <input type="button" value="View Tickets" onClick={PageRedirection} id="view"/>
          <input type="button" value="Exit" onClick={PageRedirection} id="ext"/>
        </div>
      </div>
    </>
  );
}

export default Home;
