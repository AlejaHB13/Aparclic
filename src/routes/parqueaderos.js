const express = require("express");
const router = express.Router(); //manejador de rutas de express
const parqueaderoSchema = require("../models/parqueaderos"); //Nuevo parqueadero

//endpoint para Nuevo parqueadero
router.post("/parqueaderos", (req, res) => {
    const parqueradero = parqueaderoSchema(req.body);
    parqueadero
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });   

   //endpoint para Consultar todos los parqueaderos
router.get("/parqueaderos", (req, res) => {
    parqueaderoSchema
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

  //endopoint para Consultar un parqueadero por id
router.get("/parqueaderos/:id", (req, res) => {
    const { id } = req.params;
    parqueaderoSchema
      .findOne({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

  //endpoint para Modificar un parqueadero usando el id
router.put("/parqueaderos/:id", (req, res) => {
    const { id } = req.params;
    const { pisos, cantEspacios, cantDisponibles } = req.body;
   parqueaderoSchema
      .updateOne(
        { _id: id },
        {
          $set: { pisos, cantEspacios, cantDisponibles},
        }
      )
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });