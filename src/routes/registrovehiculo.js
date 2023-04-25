const express = require("express");
const router = express.Router(); //manejador de rutas de express
const vehiculoSchema = require("../models/registrovehiculo"); //Nuevo vehiculo

//endpoint para Nuevo vehiculo
router.post("/vehiculo", (req, res) => {
    const vehiculo = vehiculoSchema(req.body);
    vehiculo
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  //endpoint para Consultar todos los vehiculos
router.get("/vehiculo", (req, res) => {
    vehiculoSchema
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

 //endopoint para Consultar un vehiculo por id
router.get("/vehiculo/:id", (req, res) => {
    const { id } = req.params;
    vehiculoSchema
      .findOne({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
 
  //endpoint para Modificar un vehiculo usando el id
router.put("/vehiculo/:id", (req, res) => {
    const { id } = req.params;
    const { tipo, placa, color, modelo } = req.body;
   vehiculoSchema
      .updateOne(
        { _id: id },
        {
          $set: { tipo, placa, color,modelo},
        }
      )
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
  
  //endpoint para Eliminar un vehiculo usando el id
router.delete("/vehiculo/:id", (req, res) => {
    const { id } = req.params;
    vehiculoSchema
      .findByIdAndDelete({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
    module.exports = router;