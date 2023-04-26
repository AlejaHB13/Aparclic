const mongoose = require("mongoose"); // importando el componente mogoose

const parqueaderoSchema = mongoose.Schema({
    pisos: {
        type: int,
        required: true
    },
    cantEspacios: {
        type: int,
        required: true,
    },
    cantDisponibles: {
        type: int,
        required: true,
    },
   
});

module.exports = mongoose.model('parqueaderos', parqueaderoSchema);