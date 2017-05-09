

var Medida = function( v,  t){
  this.valor = v;
  this.tipo = t;
}

Medida.prototype.to_s = function(){
    var string = "";
    string += this.valor;
    string += " " + this.tipo;
    return string;
  }

  Medida.regexp = XRegExp('(?<src> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) #valor              \n' +
                          '(?<espacio> \\s*)                                                       \n' +
                  			  '(?<tipo> \\s*[A-Za-z]+)                      # tipo de entrada   \n' +
                  			  '(?<to> \\s*(?:to)?\\s*)                             # to opcional       \n' +
                  			  '(?<dst> [A-Za-z0-9]+)                       # tipo destino', 'x');

  Medida.measures = Medida.measures || {};

  Medida.convertir = function(valor) {

    var match = XRegExp.exec(valor, Medida.regexp);

    if (match) {
      var numero = match.src,
          tipo   = match.tipo.toLowerCase(), //pasamos a minuscula
          destino = match.dst.toLowerCase();

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
      return "Introduzca una temperatura valida: 330e-1F C";
  };
