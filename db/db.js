// Importamos mongoose para poder conectarnos a la base de datos
const mongoose = require("mongoose");

// Conectamos a la base de datos utilizando el metodo connect de mongoose
const mongoDBURL = "mongodb+srv://johaPR:tBHWRWDFK1AWSgf0@cluster0.kdguufe.mongodb.net/proyect";

//Funcion para conectarnos a la base de datos
function connectDB() {
    return new Promise((res, rej) => {
        mongoose
            .connect(mongoDBURL)
            .then(() => {
                console.log("Conectado a la base de datos");
                res();
            })
            .catch((error) => {
                console.error("Error al conectar a la base de datos: ", err);
                rej(err);
            });
    });
}

//Exportamos la funcion para conectarnos a la base de datos
module.exports = connectDB;