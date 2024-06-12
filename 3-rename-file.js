/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */
const fs = require('fs');

fs.rename('bird.jpg', 'pajaro.jpg',(error)=> {
    if(error) throw error;
    console.log("file renamed");
});