const express = require("express");
const router = express.Router(); //manejador de rutas de express
const sesionSchema = require("../models/iniciosesion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post("/signup", async (req, res) => {
    const { usuario, contrasena, tipoUsuario } = req.body;
    const iniciosesions = new sesionSchema({
        usuario: usuario,
        contrasena: contrasena,
        tipoUsuario: tipoUsuario,
    });
    tipoUsuario.contrasena = await iniciosesions.encryptClave(iniciosesions.contrasena);
    await iniciosesions.save(); //save es un método de mongoose para guardar datos en MongoDB //segundo parámetro: un texto que hace que el código generado sea único //tercer parámetro: tiempo de expiración (en segundos, 24 horas en segundos)
    //primer parámetro: payload - un dato que se agrega para generar el token
    const token = jwt.sign({ id: iniciosesions._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24, //un día en segundos
    });
    res.json({
        auth: true,
        token,
    });
});




//inicio de sesión
router.post("/login", async (req, res) => {
    // validaciones
    const { error } = sesionSchema.validate(req.body.usuario, req.body.contrasena, req.body.tipoUsuario);
    if (error) return res.status(400).json({ error: error.details[0].message });
    //Buscando el usuario por su dirección de correo
    const user = await sesionSchema.findOne({ usuario: req.body.usuario });

    //validando si no se encuentra
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });
    if (error) return res.status(400).json({ error: error.details[0].message });
    //Buscando el usuario por su dirección de correo
    const user1 = await sesionSchema.findOne({ tipoUsuario: req.body.tipoUsuario });

    //validando si no se encuentra
    if (!user1) return res.status(400).json({ error: "Tipo de usuario incorrecto" });
    //Transformando la contraseña a su valor original para 
    //compararla con la clave que se ingresa en el inicio de sesión
    if (error) return res.status(400).json({ error: error.details[0].message });
    //Buscando el usuario por su dirección de correo
    const user2 = await sesionSchema.findOne({ contrasena: req.body.contrasena });

    //validando si no se encuentra
    if (!user2) return res.status(400).json({ error: "Contraseña invalida" });
    let accessToken = null;
      const expiresIn = 24 * 60 * 60;
      accessToken = jwt.sign(
        { id: user.id },
        process.env.SECRET, {

        expiresIn: expiresIn
  
      });
  
      res.json({accessToken});
  
    
});

module.exports = router;
