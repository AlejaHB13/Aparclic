const mongoose = require("mongoose"); // importando el componente mogoose

const salidaSchema = mongoose.Schema({
    tipoVehiculo: {
        type: String,
        required: true
    },
    placaVehiculo: {
        type: String,
        required: true,
       
    },
    fechayhora: {
        type: String,
        required: true
    },
    costo:{
        type:Number,
        required:false
    }
});

module.exports = mongoose.model('Salida', salidaSchema);