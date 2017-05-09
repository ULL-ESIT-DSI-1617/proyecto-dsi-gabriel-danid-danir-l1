
var Fahrenheit = function(v){
  Temperatura.call(this,v,"Fahrenheit");
}

Fahrenheit.prototype = new Temperatura();

Fahrenheit.prototype.toCelsius = function(){
    return new Celsius((this.valor -32) * (5/9)).to_s();
  }

Fahrenheit.prototype.toKelvin = function(){
    return new Kelvin((this.valor + 459.67)*(5/9)).to_s();
  }

/*
Fahrenheit.prototype.convert = function(){
    var result;
    if(this.convertir == 'C' || this.convertir == 'c'){
      return this.to_C().to_s();
    }

    if(this.convertir == 'K' || this.convertir == 'k'){
      return this.to_K().to_s();
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }

}*/

var measures = Medida.measures;
measures.f = Fahrenheit;
