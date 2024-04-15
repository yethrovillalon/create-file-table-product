const {crearArchivo} = require('./helpers/multiplicador')
const argv = require('./config/yargs');

//console.clear();
//console.log("==================");
//console.log("Tabla del 5");
//console.log("==================");



//const multiNumber = (value, index, array) => {
//    console.log(`La multiplicacion de ` + value + ` x ` + base  + ` es igual a ` + value * base);
//}

//numbers.forEach(multiNumber);

// node app.js -b 5 -l false ejecución
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));