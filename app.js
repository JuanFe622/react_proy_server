const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()
const { API_VERSION } = require("./config");


const companyRoutes = require("./src/routes/company");
const userRoutes = require("./src/routes/user");
const authRoutes = require("./src/routes/auth");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(`/api/${API_VERSION}`, companyRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, authRoutes);

module.exports = app;
