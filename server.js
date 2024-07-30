//Importamos express y las rutas de usuario y la conexion a la base de datos
const express = require("express");
const routes = require("./routes/userRoutes");
const connectDb = require("./db/db");

//Creamos una instancia de express
const app = express();
//Configuramos el puerto
const PORT = 3010;

//Middleware
app.use(express.json());

//Rutas
//app.use("/api/users", userRoutes); // Creamos una ruta para las rutas de usuario en la url /api/users
connectDb()
//Iniciamos el servidor y lo ponemos en escucha en el puerto escogido
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});