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
        type: Date,
        required: true,
        get: function () {
            return formatTime(this.horaEntrada);
        },
        set: function (value) {
            this.horaEntrada = parseTime(value);
        }
    }
});

function formatTime(time) {
    // Formatea el objeto Date en una cadena de tiempo (HH:mm)
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function parseTime(value) {
    // Analiza una cadena de tiempo (HH:mm) y devuelve un objeto Date
    const [hours, minutes] = value.split(':');
    const time = new Date();
    time.setHours(parseInt(hours, 10));
    time.setMinutes(parseInt(minutes, 10));
    return time;
}

module.exports = mongoose.model('Entrada', entradaSchema);