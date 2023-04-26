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

   //endpoint para Consultar todos los usuarios
router.get("/sesion", (req, res) => {
    sesionSchema
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

  //endopoint para Consultar un usuario por id
router.get("/sesion/:id", (req, res) => {
    const { id } = req.params;
    sesionSchema
      .findOne({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

  //endpoint para Modificar un usuario usando el id
router.put("/sesion/:id", (req, res) => {
    const { id } = req.params;
    const { usuario, contraseña, tipoUsuario } = req.body;
   sesionSchema
      .updateOne(
        { _id: id },
        {
          $set: { usuario, contraseña, tipoUsuario},
        }
      )
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });

  //endpoint para Eliminar un usuario usando el id
router.delete("/sesion/:id", (req, res) => {
    const { id } = req.params;
    sesionSchema
      .findByIdAndDelete({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
    module.exports = router;
 