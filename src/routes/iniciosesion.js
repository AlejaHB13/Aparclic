const express = require("express");
const router = express.Router(); //manejador de rutas de express
const sesionSchema = require("../models/iniciosesion"); //Nuevo usuario

//endpoint para Nuevo usuario
router.post("/sesion", (req, res) => {
    const sesion = sesionSchema(req.body);
    sesion
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });