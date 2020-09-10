const router = require("express").Router();
const spotRoutes = require("./API");

// Book routes
router.use("/signup", spotRoutes);

module.exports = router;
