const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';
        console.clear();


        for (let i = 1; i <= hasta; i++) {
            let multi = base * i;
            salida += `${base} x ${i} = ${multi}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.red} ${multi}\n`;
        }
        if (listar) { //si listar que es el segundo argumento no es llamado no sera true y no se imprime nada
            console.log('==================='.green);
            console.log(` TABLA DEL: ${base} `.blue);
            console.log('==================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla del ${base} creada`);
    } catch (err) {
        throw err;
    }


}
module.exports = {
    crearArchivo
}