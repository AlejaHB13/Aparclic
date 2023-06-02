const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const sesionSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    tipoUsuario: {
        type: String,
        required: true
    }
});
sesionSchema.methods.encryptClave = async (contrasena) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(contrasena, salt);
}
module.exports = mongoose.model('iniciosesions', sesionSchema);
