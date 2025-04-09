var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var packagesRouter = require("./routes/packages");

var app = express();

//Changed to get the data
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
    res.header("Access-Control-Allow-Methods", "GET"); 
    res.header("Access-Control-Allow-Headers", "Content-Type"); 
    next();
  });


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/packages", packagesRouter);

module.exports = app;
