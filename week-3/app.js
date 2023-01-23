const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

const mainRoutes = require("./routes");
const dataRoutes = require("./routes/getData");

app.use(mainRoutes);
app.use("/getData", dataRoutes);

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
