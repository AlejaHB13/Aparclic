const mongoose = require("mongoose"); // importando el componente mogoose

const vehiculoSchema = mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
        unique: true
    },
    modelo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);
