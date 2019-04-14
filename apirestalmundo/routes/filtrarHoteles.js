var express = require('express');
var router = express.Router();
const readJson = require('fs');

/* POST */

router.post('/', function(req, res, next) {
  var nombreHotel = req.body.nombreHotel;
  var numeroEstrellas = req.body.numeroEstrellas;
  var parametroBusqueda = req.body.parametroBusqueda;
  var headers = req.headers;
  if(nombreHotel && headers || numeroEstrellas && headers){
    readJson.readFile('./archivosJson/data.json', (err, json) => {
      var arrayHotels = JSON.parse(json);
      var hotelesEncontrados = [];
      if(parametroBusqueda === 'hoteles'){
        arrayHotels.filter(hotel => {
          if(hotel.name.indexOf(nombreHotel) !== -1 ){
            hotelesEncontrados.push(hotel);
          }
        });
      }else{
        arrayHotels.filter(hotel => {
          if(hotel.stars == numeroEstrellas ){
            hotelesEncontrados.push(hotel);
          }
        });
      }
      var response={
        hoteles: hotelesEncontrados,
        numeroHoteles: hotelesEncontrados.length,
        mensaje: 'Se encontraron los siguientes hoteles',
        status: '200'
      }
      res.send(response);  
    });
  }else{
    var response = {
      ejecucion: false,
      mensaje: 'Nombre de hotel no se encontro en la peticion',
      status: '500'
    }
    res.send(response);
  }
});

module.exports = router;
