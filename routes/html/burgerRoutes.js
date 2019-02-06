const router = require("express").Router();
const burgerController = require("./../../controllers/burgerController");

router
  .route("/")
  .get(burgerController.listBurgers);

module.exports = router;