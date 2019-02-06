const router = require("express").Router();
const burgerApiRoutes = require("./burgerApiRoutes");

router.use("/",burgerApiRoutes);

module.exports = router;
