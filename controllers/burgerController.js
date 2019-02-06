const connection = require("./../db/connection");

module.exports = {
  listBurgers: function(req, res){
    connection.query("SELECT * from burger", function(err, burgerDb){
      if(err){res.json(err)};
      //res.json(burgerDb);
      res.render("burger",{burger:burgerDb});
    });
  },
  getBurger:function(req,res){
    connection.query("SELECT * from burger WHERE ? ",{burger_id:req.params.burger_id}, function(err, burgerDb){
      if(err){res.json(err)};
      res.json(burgerDb);
    });
  },
  saveBurger:function(req,res){
    console.log("saving");
    connection.query("INSERT INTO burger SET ? ",[req.body], function(err, burgerDb){
      if(err){res.json(err)};
      res.json(burgerDb);
    });
  },
  updateBurger:function(req,res){
    let query = connection.query("UPDATE burger SET eaten ='1' WHERE ?",{burger_id:req.params.burger_id}, function(err, burgerDb){
      if(err){res.json(err)};
      res.json(burgerDb);
    });
    console.log(query.sql);
  },
  deleteBurger:function(req,res){
    connection.query("DELETE from burger WHERE ?",{burger_id:req.params.burger_id}, function(err, burgerDb){
      if(err){res.json(err)};
      res.json(burgerDb);
    });
  }
};