//Recibe todas las peticiones

//Librerias
const express = require("express");
const exphbs= require("express-handlebars");

// controllers
const CarController = require("./controllers/car_controller.js")

//configs
const app = express();

app.engine('.hbs', exphbs({extname: '.hbs'})); // configurar handlebars como motor predeterminado
app.set('view engine', ".hbs")


//request
app.get("/", function(req, res){
	res.send("Hola desde node");
});

app.get("/cars", CarController.mostrar);

app.get("/cars/:id", CarController.uno);


//app.post();

//app.put();

//app.patch();

exports.app = app;// Convierte lo que quieres en una funcion para verlo en otro archivo
