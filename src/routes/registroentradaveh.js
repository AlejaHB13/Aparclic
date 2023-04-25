const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clienteSchema = require("../models/registroentradavehiculo"); //Nuevo entrada vehiculo

//endpoint para Nueva entrada vehiculo
router.post("/entradavehiculo", (req, res) => {
    const entradavehiculo = entradaSchema(req.body);
    empleado
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//endpoint para Consultar todos las entradas de vehiculos
router.get("/entradavehiculo", (req, res) => {
    entradaSchema
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});