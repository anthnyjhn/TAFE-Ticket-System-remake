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

router.post("/create", (req, res) => {});

module.exports = router;
