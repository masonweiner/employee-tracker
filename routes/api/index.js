const router = require("express").Router();

const businessRoutes = require("./businessRoutes");

router.use("/business", businessRoutes);

module.exports = router;
