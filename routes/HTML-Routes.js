const router = require("express").Router();
const db = require("../models");
const { Error } = require("mongoose");

router.get("/sharespot", function (req, res) {
  res.send("hello world");
});
