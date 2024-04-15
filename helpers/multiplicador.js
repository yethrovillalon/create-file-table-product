const fs = require('fs')

const crearArchivo = async(base = 1, listar = false, hasta = 10) => {

    try {
        let salida = '';
        for (let i = 1; i <= hasta; i ++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log(salida);
        }
        // writeFile ,  fs.writeFileSync es mas simple pero no capta el error por lo tanto se debe integrar un try catch
        fs.writeFileSync(`./salida/tabla_${base}_multiplicacion.txt`, salida)
        return `tabla_${base}_multiplicacion.txt`;
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}