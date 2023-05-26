const mongoose = require("mongoose"); // importando el componente mogoose

const empleadoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Empleado', empleadoSchema);
