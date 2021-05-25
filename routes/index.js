const router = require("express").Router();

//set the route to "./api"
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;
