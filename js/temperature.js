

var Temperatura = function(v, t){
  Medida.call(this, v,t);

}

Temperatura.prototype = new Medida();
