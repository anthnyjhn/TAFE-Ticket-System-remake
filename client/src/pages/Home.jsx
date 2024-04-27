import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import '../assets/styles/Home.css'

function Home() {
    
  const PageRedirection = (e) => {
    switch (e.target.value) {
      case "Log Ticket":
        break;
      case "View Tickets":
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
        <Footer/>
      </div>
    </>
  );
}

export default Home;
