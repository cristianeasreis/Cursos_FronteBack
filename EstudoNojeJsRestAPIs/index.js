const express = require ("express");

const app = express();

app.use("/test", (req, res) => {
    console.log("Received request");
    res.status(200).send("Received request 3")
});

app.listen(3000,() => {
    console.log("I am ready to listen you")
});