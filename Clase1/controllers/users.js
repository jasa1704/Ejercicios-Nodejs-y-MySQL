// const dbjson = require("../db/dbjson");
const db = require("../db/coneccionMysql");

module.exports = {
    users : (req,res) => {

        db.query("SELECT * FROM USERS",(error,result, fields)=>{
            if(error){
                res.status(502).send(error);
            }
            res.send(result);
        })
        // res.send(dbjson);
    },
    user : (req,res) => {
        console.log("Un solo usuario usuarios");
        const { id } = req.params;
        res.send(id);
    },
    createUsers : (req,res) => {

        const {nombre, role} = req.body

        db.query("INSERT INTO users (id,nombre,rol) VALUE (NULL,?,?)",[nombre,role],(error,result,fields)=>{
            if(error){
                res.status(502).send(error);
            }
            res.send(result);
        })
        const datosUsers = req.body;
        res.send(datosUsers);
    },

    updateUser: (req, res) => {

        const {id, nombre, role} = req.body;

        const sql = `UPDATE users SET nombre = ${db.escape(nombre)} WHERE id=${db.escape(nombre)}`;
        
        db.query(sql, ({error, result, fields})=>{
            if(error){
                res.status(502).send(error);
            }
            res.send(result);
        })
    },

    deleteUser: (req, res) => {

        const {id} = req.body;

        const sql = `DELETE FROM users SET nombre = ${db.escape(nombre)} WHERE id=${db.escape(nombre)}`;
        
        db.query(sql, ({error, result, fields})=>{
            if(error){
                res.status(502).send(error);
            }
            res.send(result);
        })
    },
}