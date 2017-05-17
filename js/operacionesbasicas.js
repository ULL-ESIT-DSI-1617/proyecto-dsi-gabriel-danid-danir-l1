
var OperacionesBasicas = function(valor1, tipo){
  console.log("Accedo a clase Operaciones Básicas");
  Medida.call(this,valor1,tipo);
}

OperacionesBasicas.prototype = new Medida();

var Suma = function(valor1, valor2)
{
  console.log("estoy sumando");
  console.log("Accedo a clase Suma");
  this.numero1 = parseInt(valor1);
  this.numero2 = parseInt(valor2);
}

Suma.prototype = new OperacionesBasicas();

Suma.prototype.operacion = function()
{
  return (this.numero1+this.numero2);
}

var measures = Medida.measures;
measures.mas = Suma;

var Rest = function(valor1, valor2)
{
  console.log("estoy restando");
  console.log("Accedo a clase Resta");
  this.numero1 = parseInt(valor1);
  this.numero2 = parseInt(valor2);
}

Rest.prototype = new OperacionesBasicas();

Rest.prototype.operacion = function()
{
  return (this.numero1-this.numero2);
}

measures.rest = Rest;

var Mult = function(valor1, valor2)
{
  console.log("estoy multiplicando");
  console.log("Accedo a clase Multiplicacion");
  this.numero1 = parseInt(valor1);
  this.numero2 = parseInt(valor2);
}

Mult.prototype = new OperacionesBasicas();

Mult.prototype.operacion = function()
{
  return (this.numero1*this.numero2);
}

measures.mult = Mult;

var Div = function(valor1, valor2)
{
  console.log("estoy dividiendo");
  console.log("Accedo a clase División");
  this.numero1 = parseInt(valor1);
  this.numero2 = parseInt(valor2);
}

Div.prototype = new OperacionesBasicas();

Div.prototype.operacion = function()
{
  return (this.numero1);
}

measures.div = Div;
