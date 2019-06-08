const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routesUsers = require("./routes/routeUsers")(app);

app.listen(5000, ()=>{
    console.log("servidor escuchando en el puerto 5000");
})