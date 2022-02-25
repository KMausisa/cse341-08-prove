const express = require("express");
const bodyParser = require("body-parser");

// import routes
const proRoutes = require("./routes/professional");

// create an express app
const app = express();

app.use(bodyParser.json()); //application/json

// set headers to any response
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

app.use(proRoutes);

app.listen(8080);
