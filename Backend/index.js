const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./src/routes/routes.js")


const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/Backend");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})