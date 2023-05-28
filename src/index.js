const parser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const empleadosRoutes = require("./routes/registroempleado");
const clienteRoutes = require("./routes/registrocliente");
const sesionRoutes = require("./routes/iniciosesion");
const vehiculoRoutes = require("./routes/registrovehiculo");
const parqueaderosRoutes = require("./routes/parqueaderos");
const registrosalidaRoutes= require("./routes/registrosalidaveh");
const registroentradaRoutes=require("./routes/registroentradaveh");

const mongoose = require("mongoose");
require("dotenv").config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON //Gestión de las rutas usando el middleware
app.use("/api", clienteRoutes);
app.use("/api", sesionRoutes);
app.use("/api", vehiculoRoutes);
app.use("/api", parqueaderosRoutes);
app.use("/api", empleadosRoutes);
app.use("/api",registroentradaRoutes);
app.use("/api",registrosalidaRoutes);

app.use(express.json()); //Conexión a la base de datos
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexión exitosa"))
  .catch((error) => console.log(error)); //Conexión al puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
