const express = require("express");
const mysql = require("mysql");
const router = express.Router();

const databaseconfig = require("../config/database.config");
const dbPool = mysql.createPool(databaseconfig);

router.get("/admins", (req, res) => {
  dbPool.getConnection((err, connection) => {
    if (err) throw err;

    const sql_query = "SELECT Username FROM admins";

    connection.query(sql_query, (err, queryResult) => {
      res.json(queryResult);

      connection.release();
      if (err) throw err;
    });
  });
});

router.get("/tickets", (req, res) => {
  dbPool.getConnection((err, connection) => {
    if (err) throw err;

    const sql_query = "SELECT * FROM tickets";

    connection.query(sql_query, (err, queryResult) => {
      res.json(queryResult);

      connection.release();
      if (err) throw err;
    });
  });
});

router.get('/ticket/:tixId',(req,res) => {
  dbPool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log(req.params.tixId)
    const sql_query = `SELECT * FROM tickets WHERE TicketId = ${req.params.tixId}`;

    connection.query(sql_query, (err, queryResult) => {
      res.json(queryResult);

      connection.release();
      if (err) throw err;
    });
  });
})

router.post("/create", (req, res) => {
    const bodyData = req.body
    dbPool.getConnection((err, connection) => {
        if (err) throw err;
    
        const sql_query = `INSERT INTO tickets(Summary, Description, Urgency, Impact, Priority, DateLogged, Assignee, Status, DateResolved, Solution, Feedback)
        VALUES ('${bodyData.Summary}','${bodyData.Description}','${bodyData.Urgency}', '${bodyData.Impact}', '${bodyData.Priority}', '${bodyData.DateLogged}', '${bodyData.Assignee}', '${bodyData.Status}', '${bodyData.DateResolved}', '${bodyData.Solution}', '${bodyData.Feedback}')`;
    
        connection.query(sql_query, (err, queryResult) => {
          res.json(queryResult);
    
          connection.release();
          if (err) throw err;
        });
      });
});

router.put("/update", (req, res) => {
  const bodyData = req.body[0]; // Extracting the first object from the array

  console.log(bodyData);

  dbPool.getConnection((err, connection) => {
    if (err) throw err;

    let dataColumnString = "";

    // Constructing the SET clause of the SQL query
    for (let index in bodyData) {
      if (index === 'TicketId') continue; // Skip TicketId in the update
      console.log(`${index}: ${bodyData[index]}`);
      dataColumnString += ` ${index} = '${bodyData[index]}',`; // Adding each column-value pair
    }

    // Removing the trailing comma from dataColumnString
    dataColumnString = dataColumnString.slice(0, -1);

    console.log(dataColumnString);

    const sql_query = `UPDATE tickets SET ${dataColumnString} WHERE TicketId = ${bodyData.TicketId}`;

    connection.query(sql_query, (err, queryResult) => {
      if (err) throw err;

      res.json(queryResult);

      connection.release();
    });
  });
});

router.delete("/delete/:tixId", (req, res) => {
  console.log(req.params.tixId)
  dbPool.getConnection((err, connection) => {
    if (err) throw err;

    const sql_query = `DELETE FROM tickets WHERE TicketId = ${req.params.tixId}`;

    connection.query(sql_query, (err, queryResult) => {
      if (err) throw err;

      res.json(queryResult);

      connection.release();
    });
  });
});

module.exports = router;
