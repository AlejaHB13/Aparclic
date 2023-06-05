const mongoose = require("mongoose"); // importando el componente mogoose

const parqueaderoSchema = mongoose.Schema({
    pisos: {
        type: Number,
        required: true
    },
    cantEspacios: {
        type: Number,
        required: true,
    }
   
});

module.exports = mongoose.model('parqueaderos', parqueaderoSchema);