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
//endpoint para consultar entrada de vehiculo por id
router.get("/entradavehiculo/:id", (req, res) => {
    const { id } = req.params;
    entradaSchema
        .findOne({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para Modificar entrada de vehiculo por id 
router.put("/entradavehiculo/:id", (req, res) => {
    const { id } = req.params;
    const { placa, fechaIngreso, horaEntrada} = req.body;
    entradaSchema
        .updateOne(
            { _id: id },
            {
                $set: { placa, fechaIngreso, horaEntrada},
            }
        )
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para Eliminar una entrada de vehiculo por  id
router.delete("/entradavehiculo/:id", (req, res) => {
    const { id } = req.params;
    entradaSchema
        .findByIdAndDelete({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
module.exports = router;
