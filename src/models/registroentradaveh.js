const mongoose = require("mongoose"); // importando el componente mogoose

const entradaSchema = mongoose.Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    fechaIngreso: {
        type: Date,
        required: true
    },
    horaEntrada: {
        type: String,
        required: true,
    
}
});

module.exports = mongoose.model('Entrada', entradaSchema);