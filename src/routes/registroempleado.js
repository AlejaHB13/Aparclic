const express = require("express");
const router = express.Router(); //manejador de rutas de express
const empleadoSchema = require("../models/registroempleado"); //Nuevo empleado

//endpoint para Nuevo empleado
router.post("/empleado", (req, res) => {
    const empleado = empleadoSchema(req.body);
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
//endopoint para consultar un empleado por ID
router.get("/empleado/:id", (req, res) => {
    const { id } = req.params;
    empleadoSchema
        .findOne({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para Modificar un empleado usando el id
router.put("/empleado/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, usuario, contraseña } = req.body;
    empleadoSchema
        .updateOne(
            { _id: id },
            {
                $set: { nombre, cedula, usuario, contraseña },
            }
        )
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para Eliminar un empleado usando el id
router.delete("/empleado/:id", (req, res) => {
    const { id } = req.params;
    empleadoSchema
        .findByIdAndDelete({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
module.exports = router;
