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
    clienteSchema
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

  //endopoint para Consultar un cliente
router.get("/clientes/:id", (req, res) => {
    const { id } = req.params;
    clienteSchema
      .findOne({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

  //endpoint para Eliminar un cliente usando el id
router.delete("/clientes/:id", (req, res) => {
    const { id } = req.params;
    clienteSchema
      .findByIdAndDelete({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
  module.exports = router;