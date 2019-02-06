const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

router.get("*",function(req,res){
  res.render("fileNotFound",{layout:'error'});
})

module.exports = router;