const mongoose = require("mongoose"); // importando el componente mogoose

const entradaSchema = mongoose.Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    fechaIngreso: {
        type: String,
        required: true
    },
    horaEntrada: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Entrada', entradaSchema);