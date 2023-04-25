const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clienteSchema = require("../models/registroempleado"); //Nuevo empleado

//endpoint para Nuevo empleado
router.post("/empleado", (req, res) => {
    const empleado = clienteSchema(req.body);
    empleado
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//endpoint para Consultar todos los empleados
router.get("/empleado", (req, res) => {
    empleadoSchema
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});