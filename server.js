const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

app.use(routes);

app.listen(PORT,function(){
  console.log("Listening to Port " + PORT);
})