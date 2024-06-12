/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'.
 * 
 * REsultado esperado: https://oscarm.tinytake.com/msc/OTcyMDU5MV8yMzM1NjMzNA
 * 
 * 
 * Este script hace lo siguiente:

Importa los módulos fs y path.
Define el path del directorio 'backup-files' usando path.join y __dirname para asegurarse de que la ruta es correcta independientemente de dónde se ejecute el script.
Usa fs.readdir para leer el contenido del directorio. Esta función recibe un callback que maneja los errores y recorre los archivos encontrados.
Si hay un error, se muestra un mensaje de error en la consola.
Si no hay errores, se recorre el array de archivos y se muestra cada archivo en la consola.
 */

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'backup-files');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
        console.log(file);
    });
});
