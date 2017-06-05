var XRegExp = require('./xregexp.js');

var Medida = function(v){
  this.valor = v;
  //this.tipo = t;
}

Medida.prototype.to_s = function(){
    var string = "";
    string += this.valor;
    string += " " + this.tipo;
    return string;
  }

  Medida.regexp = XRegExp('(?<src> [0-9]+) #valor              \n' +
                  			  '(?<tipo> \s*[^0-9]+)                      # tipo de entrada   \n' +
                  			//  '(?<to> \s*(?:to)?\s*)                             # to opcional       \n' +
                  			  '(?<dst> \\s*[0-9]+)  #valor                      # tipo destino', 'x');

  Medida.measures = Medida.measures || {};

  Medida.convertir = function(valor) {

    var match = XRegExp.exec(valor, Medida.regexp);

    if (match) {

      var numero = match.src,
          tipo   = match.tipo.toLowerCase(), //pasamos a minuscula
          tipo = tipo.trim();
      var    destino = match.dst.toLowerCase();
      var myHash = {'-': "rest", '+': "mas", '*': "mult", '/': "div"}
      var aux = myHash[tipo];
      tipo = aux;
      try {
        console.log(numero + " " + tipo + " " + destino);
        var source = new measures[tipo](numero, destino); //new measures['k'](35) => new Kelvin(35)
        return source.operacion();
      }
      catch(err) {
        console.log(err);
        return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
      }
    }
    else
      return "Introduzca una operación válida.";
  };
  
  var OperacionesBasicas = function(valor1){
  console.log("Accedo a clase Operaciones Básicas");
  Medida.call(this,valor1);
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
  return (this.numero1/this.numero2);
}
measures.div = Div;

module.exports = Medida;