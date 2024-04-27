const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const jsonData = {
        "Users" : {
            1 : ["User_1"],
            1 : ["User_2"],
        }
    }
  res.send(jsonData);
});

module.exports = router;
