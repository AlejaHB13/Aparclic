const mongoose = require("mongoose"); // importando el componente mogoose

const salidaSchema = mongoose.Schema({
    tipoVehiculo: {
        type: String,
        required: true
    },
    placaVehiculo: {
        type: String,
        required: true,
        unique: true
    },
    fechayhora: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Salida', salidaSchema);