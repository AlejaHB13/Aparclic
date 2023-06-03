const mongoose = require("mongoose"); // importando el componente mogoose

const entradaSchema = mongoose.Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    fechayhora: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Entrada', entradaSchema);