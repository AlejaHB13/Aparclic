const mongoose = require("mongoose"); // importando el componente mogoose

const sesionSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true,
        unique: true
    },
    tipoUsuario: {
        type: String,
        required: true,
        unique: true
    },
   
});

module.exports = mongoose.model('iniciosesion', sesionSchema);