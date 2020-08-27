const router = require("express").Router();
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const db = require("../models");
const { Error } = require("mongoose");

router.post("/", passport.authenticate("local"), (req, res) => {
  res.json({
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    id: req.user._id,
  });
});

router.post("/signup", (req, res) => {
  db.User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    console.log(err);
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new db.User({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

module.exports = router;
