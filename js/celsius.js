var Celsius = function(v){
  Temperatura.call(this,v,"Celsius");
}

Celsius.prototype = new Temperatura();

Celsius.prototype.toFahrenheit = function(){
    return new Fahrenheit((this.valor * 9/5)+32, "Fahrenheit").to_s();
  }

Celsius.prototype.toKelvin = function(){
    return new Kelvin(this.valor + 273.15, "Kelvin").to_s();
  }

/*
Celsius.prototype.convert = function(){
    var result;
    if(this.convertir == 'F' || this.convertir == 'f'){
      return this.to_F().to_s();
    }

    if(this.convertir == 'K' || this.convertir == 'k'){
      return this.to_K().to_s();
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }
}
*/

var measures = Medida.measures;
measures.c = Celsius;
