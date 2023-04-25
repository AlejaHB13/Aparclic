const express = require("express");
const router = express.Router(); //manejador de rutas de express
const salidaSchema = require("../models/registrosalidavehiculo"); //Nuevo salida vehiculo

//endpoint para Nueva salida vehiculo
router.post("/salidavehiculo", (req, res) => {
    const salidavehiculo = salidaSchema(req.body);
    salida
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//endpoint para Consultar todos las salidas de vehiculos
router.get("/salidavehiculo", (req, res) => {
    salidaSchema
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para consultar salida de vehiculo por id
router.get("/salidavehiculo/:id", (req, res) => {
    const { id } = req.params;
    salidaSchema
        .findOne({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para Modificar salida de vehiculo por id 
router.put("/salidavehiculo/:id", (req, res) => {
    const { id } = req.params;
    const { tipoVehiculo, placaVehiculo, horaSalida} = req.body;
    salidaSchema
        .updateOne(
            { _id: id },
            {
                $set: { tipoVehiculo, placaVehiculo, horaSalida},
            }
        )
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para Eliminar una salida de vehiculo por  id
router.delete("/salidavehiculo/:id", (req, res) => {
    const { id } = req.params;
    salidaSchema
        .findByIdAndDelete({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
module.exports = router;
