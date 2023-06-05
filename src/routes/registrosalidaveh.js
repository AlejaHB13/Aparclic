const express = require("express");
const router = express.Router(); //manejador de rutas de express
const salidaSchema = require("../models/registrosalidaveh"); //Nuevo salida vehiculo
const vehiculoSchema = require("../models/registrovehiculo");

// Endpoint para Nueva salida de vehiculo
router.post("/salidavehiculo", (req, res) => {
    const { placaVehiculo } = req.body;
  
    // Guardar la salida del vehiculo
    const salidavehiculo = salidaSchema(req.body);
    console.log("iniciando post",req.body._id)
    salidavehiculo
      .save()
      .then((data) => {
         // Buscar y eliminar el vehiculo correspondiente a la placa ingresada
      vehiculoSchema
      .findOne({ placa: placaVehiculo })
      .then((vehiculo) => {
        if (!vehiculo) {
          return res.json({ message: "Vehículo no encontrado" });
        }
      
        const tiempoEntrada = new Date(vehiculo.fechayhora);
        const tiempoSalida = new Date(req.body.fechayhora);
        const tiempoTranscurrido = (tiempoSalida - tiempoEntrada) / (1000 * 60); // Diferencia en minutos

        let costo = 0;
        console.log(vehiculo.tipo)
        switch (vehiculo.tipo) {
          case 'carro':
            costo = tiempoTranscurrido * 110;
            break;
          case 'moto':
            costo = tiempoTranscurrido * 50;
            break;
          case 'bicicleta':
            costo = tiempoTranscurrido * 10;
            break;
          default:
            // Tipo de vehículo no válido
            break;
        }
        salidaSchema
        .updateOne(
            { placaVehiculo:req.body.placaVehiculo },
            {
                $set: { costo},
            }
        )
        .then((data) => {
          console.log(data)
            //res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
        // Buscar y eliminar el vehiculo correspondiente a la placa ingresada
        vehiculoSchema
          .findOneAndDelete({ placa: placaVehiculo })
          .then(() => {
            //res.json(data);
            res.json(costo);
          })
          .catch((error) => {
            res.json({ message: error });
          });
        })
        .catch((error) => {
          res.json({ message: error });
        });
      })
      .catch((error) => res.json({ message: error }));
  });
//endpoint para Consultar todos las salidas de vehiculos
router.get("/salidavehiculo", (req, res) => {
    salidaSchema
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para consultar salida de vehiculo por id
router.get("/salidavehiculo/:id", (req, res) => {
    const { id } = req.params;
    salidaSchema
        .findOne({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para Modificar salida de vehiculo por id 
router.put("/salidavehiculo/:id", (req, res) => {
    const { id } = req.params;
    const { tipoVehiculo, placaVehiculo, fechayhora} = req.body;
    salidaSchema
        .updateOne(
            { _id: id },
            {
                $set: { tipoVehiculo, placaVehiculo, fechayhora},
            }
        )
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
//endpoint para Eliminar una salida de vehiculo por  id
router.delete("/salidavehiculo/:id", (req, res) => {
    const { id } = req.params;
    salidaSchema
        .findByIdAndDelete({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
module.exports = router;
