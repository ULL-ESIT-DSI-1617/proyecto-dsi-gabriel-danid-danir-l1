'use strict'
var Medida = require('./../public/js/medida.js');
var should = require('should')

describe("Prueba de la suma", function()  {
  it("Debe comprobar que se realiza la suma correctamente.", function() {
    var suma = Medida.convertir("10+20");
    suma.should.equal(30);
  })
});

describe("Prueba de la resta", function()  {
  it("Debe comprobar que se realiza la resta correctamente.", function() {
    var suma = Medida.convertir("18-4");
    suma.should.equal(14);
  })
});

describe("Prueba de la multiplicación", function()  {
  it("Debe comprobar que se realiza la multiplicación correctamente.", function() {
    var suma = Medida.convertir("5*10");
    suma.should.equal(50);
  })
});

describe("Prueba de la división", function()  {
  it("Debe comprobar que se realiza la división correctamente.", function() {
    var suma = Medida.convertir("60-24");
    suma.should.equal(36);
  })
});