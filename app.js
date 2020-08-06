"use strict";

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Testing if Nodemon works again and again");
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});