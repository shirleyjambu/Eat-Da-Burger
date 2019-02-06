const router = require("express").Router();
const burgerRoutes = require("./burgerRoutes");

router.use("/",burgerRoutes);

module.exports = router;
