const argv = require('yargs')
    .option('b', { //lo que representa
        alias: 'base', //el nombre de la info a la que pertenece
        type: 'number', //el tipo de dato que esta recogiendo
        demandOption: true, //que mande la info si o si
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'muestra hasta donde llega la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;