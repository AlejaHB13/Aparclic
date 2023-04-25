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
 