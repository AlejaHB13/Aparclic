const mongoose = require("mongoose"); // importando el componente mogoose

const vehiculoSchema = mongoose.Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true
    },
    fechayhora:{
        type: String,
        required: true
        
    }
});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);
