const router = require("express").Router();
const burgerController = require("./../../controllers/burgerController");

router.
  route("/burger/:burger_id?")
  .get(burgerController.getBurger)
  .post(burgerController.saveBurger)
  .put(burgerController.updateBurger)
  .delete(burgerController.deleteBurger);

module.exports = router;