const usersController = require("../controllers/users");

module.exports = app =>{
    app.get("/",()=>{res.send("mamá estoy triunfando")})
    app.get("/usuarios", usersController.users);
    app.get("/usuario/:id", usersController.user);
    app.post("/usuario", usersController.createUsers);
    app.post("/updateusuario", usersController.updateUser);
    app.post("/deleteusuario", usersController.deleteUser);
}