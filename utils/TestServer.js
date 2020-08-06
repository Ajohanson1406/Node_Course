const express = require('express');
const supertest = require('supertest')


//Va a recibir una ruta 
function testServer(route){
    //Creamos una nueva app
    const app = express()
    //ha esta app se le pasa la ruta
    route(app)
    //retornamos supertest y envolvemos nuestra app
    return supertest(app)
}

module.exports = testServer