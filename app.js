const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const NoPageRoutes = require("./routes/nopage");
const bodyparser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyparser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes.router); //Filtering routes by passing /admin
app.use(shopRoutes);
app.use(NoPageRoutes);
app.listen(8080); //listen() automtically creates a server
