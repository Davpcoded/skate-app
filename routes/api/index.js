const router = require("express").Router();
const spotRoutes = require("./API");

// spot routes
router.use("/", spotRoutes);

module.exports = router;
