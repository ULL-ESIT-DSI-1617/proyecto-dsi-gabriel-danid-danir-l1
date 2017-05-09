
var Metros = function(v){
  Medida.call(this, v, "Metros");
}

Metros.prototype = new Medida();

Metros.prototype.toPulgadas = function(){
    return new Pulgadas(this.valor * 39.3701, "\"").to_s();
  }


var Pulgadas = function(v){
  Medida.call(this, v, "Pulgadas");
}

Pulgadas.prototype = new Medida();

Pulgadas.prototype.toMetros = function(){

    return new Metros(this.valor / 39.3701, "Metros").to_s();
  }



  var measures = Medida.measures;
  measures.m = Metros;
  measures.p = Pulgadas;
