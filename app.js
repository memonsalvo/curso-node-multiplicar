const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');
// import { crearArchivo } from './helpers/multiplicar';


console.clear();

// console.log( process.argv );
// console.log( argv );

// console.log('base: yargs', argv.b);



// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h) //orden de los valores dados en consola
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));