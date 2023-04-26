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

  