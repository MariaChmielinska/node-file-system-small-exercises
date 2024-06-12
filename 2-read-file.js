/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */
const fs = require('fs');

// Fs es un objeto que dispone de varios métodos para manipular los archivos. Por ejemplo, el método fs.readFileSync nos permite leer un fichero

const fileContent = fs.readFileSync("./test.txt", "utf-8");
console.log(fileContent);