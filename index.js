const router = require('./router.js');

const port = 4040;

const app= router.app; //Importando la app del archivo router

app.listen(port, function(){
	console.log("Server running on port" + port)
})