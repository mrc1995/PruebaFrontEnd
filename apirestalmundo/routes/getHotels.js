var express = require('express');
var router = express.Router();
const readJson = require('fs');

/**GET */
router.get('/', function(req, res, next) {
    var headers = req.headers;
    if(headers){
        readJson.readFile('./archivosJson/data.json', (err, json) => {
            let obj = {
                hoteles: JSON.parse(json),
                ejecucion: true,
                status: '200',
                mensaje: 'Hoteles consultados correctamente'
            };
            res.json(obj);
        });
    }else{
        let obj = {
            ejecucion: false,
            mensaje: 'No se encontraron headers en la peticion en la peticion',
            status: '500'
        }
        res.json(obj);
    }
});

module.exports = router;