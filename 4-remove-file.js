/**
 * Borra el fichero 'borrame.txt' situado en este mismo directorio
 */

const fs = require('fs');

// delete a file asynchronously
fs.unlink('./backup-files/borrame.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File is deleted.');
  }
});