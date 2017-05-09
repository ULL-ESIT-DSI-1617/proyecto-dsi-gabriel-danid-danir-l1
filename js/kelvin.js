

var Kelvin = function(v){
  Temperatura.call(this,v,"Kelvin");
}

Kelvin.prototype = new Temperatura();

Kelvin.prototype.toCelsius = function(){
    return new Celsius(this.valor - 273.15).to_s();
  }

Kelvin.prototype.toFahrenheit = function(){
    return new Fahrenheit(1.8 * (this.valor - 273.15) + 32).to_s();
  }

/*
Kelvin.prototype.convert = function(){
    var result;
    if(this.convertir == 'F' || this.convertir == 'f'){
      return this.to_F().to_s();

    }

    if(this.convertir == 'C' || this.convertir == 'c'){
      return this.to_C().to_s();
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }
}*/

var measures = Medida.measures;
measures.k = Kelvin;
