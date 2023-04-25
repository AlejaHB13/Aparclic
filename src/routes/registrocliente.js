const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clienteSchema = require("../models/registrocliente"); //Nuevo cliente

//endpoint para Nuevo cliente
router.post("/clientes", (req, res) => {
    const cliente = clienteSchema(req.body);
    cliente
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  //endpoint para Consultar todos los clientes
router.get("/clientes", (req, res) => {
    clienteeSchema
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });