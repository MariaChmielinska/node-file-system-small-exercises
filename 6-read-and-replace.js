/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
/**
 * Reemplaza todo el texto en un fichero y guarda el resultado en "result.html".
 * 
 * @param {string} htmlFilePath - Ruta al fichero a modificar
 * @param {string} textToSearch - Texto a buscar
 * @param {string} textToReplace - Texto a reemplazar
 */
const fs = require('fs');
const path = require('path'); // Asegúrate de importar el módulo 'path'

function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    const resultFilePath = path.join(path.dirname(htmlFilePath), 'result.html');
    
    fs.readFile(htmlFilePath, 'utf8', (err, data) => {
        if (err) {
            return console.error(`Error reading file: ${err}`);
        }

        const updatedContent = data.split(textToSearch).join(textToReplace);

        fs.writeFile(resultFilePath, updatedContent, 'utf8', (err) => {
            if (err) {
                return console.error(`Error writing file: ${err}`);
            }

            console.log(`File has been saved as ${resultFilePath}`);
        });
    });
}

// Example usage
replaceTextInFile("./index.html", "FFC371", "ADD8E6");
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");
