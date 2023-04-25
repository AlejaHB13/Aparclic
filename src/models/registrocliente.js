const mongoose = require("mongoose"); // importando el componente mogoose

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cliente', clienteSchema);