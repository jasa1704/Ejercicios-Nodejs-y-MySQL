const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "357159js",
    database: "usuarios"
})

connection.connect((error)=>{
    if(error){
        console.log("Error en Mysql: " + error.stack);
        return;
    }
    console.log("Estamos conectados en Mysql: " + connection.threadId);
});

module.exports = connection;