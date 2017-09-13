const Handlebars = require('handlebars');

const Cars = require("../model/car.js");

exports.mostrar = function(req, res){
	var context = {
		car: Cars.getAll()
	}
	res.render('cars', context);
}

exports.uno = function(req, res){
	var id = req.params.id;
	var context = Cars.getOne(id);

	res.render('onecar', context);
}