/*global XRegExp*/
(function(exports){
  var regexp = '^(\\s*)                                       ' +
                '(?<valor> [-+]?[0-9]+(?:\\.[0-9]+)?) ' +
                '(\\s*)                                               ' +
                '(?<tipo> [\\/\\-\\*\\+])                              ' +
                '(\\s*)';

  function Medida(valor,valor2,tipo)
  {
    console.log("Accedo a clase Medida");
    if(tipo)
    {
      this.valor = valor || 0;
      this.valor2 = valor2 || 0;
      this.tipo  = tipo;
    }
    else
    {
      var expresion;
      console.log("RegExp:"+regexp);
      expresion = XRegExp.exec(valor,XRegExp(regexp,'ix'));
      console.log("Expresion:"+expresion);
      if(expresion)
      {
        var numero = expresion.valor;
        var numero2 = expresion.to;
        numero = parseFloat(numero);
        numero2 = parseFloat(numero2);
        var tipo = expresion.tipo;
        tipo = tipo.toLowerCase();
        this.valor = numero;
        this.valor2 = numero2;
        this.tipo = tipo;
        console.log("Valor: " + this.valor + ", Tipo: " + this.tipo);
      }
    }
  }
  Medida.constructor = Medida;
  Medida.measures = Medida.measures || {};

  Medida.match = function(valor)
  {
    var exp_regular = '(\\s*)'+
                      '(?<to> [-+]?[0-9]+(?:\\.[0-9]+)?)'+
                      '(\\s*)$';

    var res = XRegExp.exec(valor,XRegExp(regexp.concat(exp_regular),'ix'));
    console.log("Numero:"+res.valor+", tipo: "+res.tipo+", Destino:"+res.to);
    return res;
  }

  Medida.convertir = function(valor) {
    var measures = Medida.measures;
    var match = Medida.match(valor);
    if (match) {
      var numero = match.valor,
          tipo   = match.tipo,
          destino = match.to;
      tipo = tipo.toLowerCase();
      destino = destino.toLowerCase();
      console.log("Numero:"+numero+",Tipo:"+tipo+",Destino:"+destino);
      try {
        var source = new measures[tipo](numero,numero2);  // new Fahrenheit(32)
        console.log("Source:"+source);
        console.log("Return:"+source.operacion().valor);
        return source.operacion().valor ; // "0 Celsius"
      }
      catch(err) {
        if (tipo == destino){
          return numero + "       " + destino;
        }
        else{
          return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
        }
      }
    }
    else
      return "Introduzca una temperatura valida: 330e-1 F to C";
  };

  exports.Medida = Medida;

})(this);
