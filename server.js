const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { getEmail } = require("./index.js");
app.use(bodyParser.json());;
const fs = require('fs')


const PORT = 8080;
app.use(cors());


app.listen(PORT, () => console.log(`Its alive on http://localhost:${PORT}`));


app.post("/getAccount", async (req,res) => {
    console.log("Request Recieved");
    const a = await getEmail().then((resp) => {
        res.status(200).json(resp);
    });
})