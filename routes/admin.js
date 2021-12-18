const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const products = [];
router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add product" });
});
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
