const router = require("express").Router();

const userRoutes = require("./businessRoutes");

router.use("/business", userRoutes);

module.exports = router;
