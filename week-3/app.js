const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

const routes = require("./routes");

app.use(routes);

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
