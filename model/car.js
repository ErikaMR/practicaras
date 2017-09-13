var cars=[
{
	id: 1,
	marca:"Ford",
	url:"https://media.zigcdn.com/media/model/2016/Feb/ford_ecosports_420x210.jpg",
	precio: 500000
},
{
	id: 2,
	marca:"Audi",
	url:"https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/audi-rs7_1.jpg",
	precio: 800000
},
{
	id: 3,
	marca:"Mercedez Benz",
	url:"https://www2.mercedes-benz.com.mx/content/media_library/hq/hq_mpc_reference_site/passenger_cars_ng/new_cars/models/model_navigation_library/g-class_w463_705x325_ReNaTe_jpg.object-Single-MEDIA.tmp/g-class_w463_705x325_ReNaTe.jpg",
	precio: 2000000
}
]

exports.getAll = function(){
	return cars;
}

exports.getOne = function(id){
	return cars.filter((object)=>object.id==id) [0];
}