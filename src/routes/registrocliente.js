const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clienteSchema = require("../models/registrocliente"); //Nuevo cliente

//endpoint para Nuevo cliente
router.post("/cliente", (req, res) => {
    const cliente = clienteSchema(req.body);
    cliente
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  //endpoint para Consultar todos los clientes
router.get("/cliente", (req, res) => {
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
router.get("/cliente/:id", (req, res) => {
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

//endpoint para Modificar un cliente usando el id
router.put("/cliente/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, cedula, telefono } = req.body;
 clienteSchema
    .updateOne(
      { _id: id },
      {
        $set: { nombre, cedula, telefono},
      }
    )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//endpoint para Eliminar un cliente usando el id
router.delete("/cliente/:id", (req, res) => {
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