const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.use("/", (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "NoPage.html"));
  res.render("NoPage", { pageTitle: "No page found" }); //In app js we set views option views folder[So NoPage pug is ised here]
});
module.exports = router;
