const express = require("express");
const app = express();
const port = 4000;

//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//Routes
const router = require("./src/routes");
app.use("/", router);

//Listening port
app.listen(port, () => console.log(`Listing on port ${port}`));
