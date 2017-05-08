(function(){
    
    var measures = Medida.measures || {};
    
    function Volumen(valor,tipo)
    {
      console.log("Accedo a clase Volumen");
      Medida.call(this,valor,tipo);
    }
    Volumen.prototype = new Medida();
    Volumen.prototype.constructor = Volumen;

  // ----------------------------------------------------- //

    function Metro3(valor)
    {
      Volumen.call(this,valor,'metro cubico');
    }
    Metro3.prototype = new Volumen;
    Metro3.prototype.constructor = Metro3;
    measures.m3 = Metro3;
    Metro3.prototype.toLitro = function()
    {
        return new Metro3(this.valor * 1000);
    }
    Metro3.prototype.toCentimetro3 = function()
    {
        return new Centimetro3(this.valor * 1000000);
    }
    Metro3.prototype.toMilimetro3 = function()
    {
        return new Milimetro3(this.valor * 1000000000);
    }
    Metro3.prototype.toKilometro3 = function()
    {
        return new Kilometro3(this.valor / 1000000000);
    }
  // ----------------------------------------------------- //
    
    function Centimetro3(valor)
    {
        Volumen.call(this,valor,'cm3');
    }
    Centimetro3.prototype = new Volumen;
    Centimetro3.prototype.constructor = Centimetro3;
    measures.cm3 = Centimetro3;
    Centimetro3.prototype.toKilometro3 = function()
    {
        return new Kilometro3(this.valor/1000000000000000);
    }
    Centimetro3.prototype.toMilimetro3 = function()
    {
        return new Milimetro3(this.valor * 1000);
    }
    Centimetro3.prototype.toMetro3 = function()
    {
        return new Metro3(this.valor/1000000);
    }
    Centimetro3.prototype.toLitro = function()
    {
        return new Litro(this.valor / 1000);
    }

  // ----------------------------------------------------- //

    function Kilometro3(valor)
    {
        Volumen.call(this,valor,'cm3');
    }
    Kilometro3.prototype = new Volumen;
    Kilometro3.prototype.constructor = Kilometro3;
    measures.km3 = Kilometro3;
    Kilometro3.prototype.toMilimetro3 = function()
    {
        return new Milimetro3(this.valor * 1000000000000000000);
    }
    Kilometro3.prototype.toCentimetro3 = function()
    {
        return new Centimetro3(this.valor * 1000000000000000);
    }
    Kilometro3.prototype.toMetro3 = function()
    {
        return new Metro3(this.valor * 1000000000);
    }
    Kilometro3.prototype.toLitro = function()
    {
        return new Litro(this.valor * 1000000000000);
    }


  // ----------------------------------------------------- //

    function Milimetro3(valor)
    {
        Volumen.call(this,valor,'cm3');
    }
    Milimetro3.prototype = new Volumen;
    Milimetro3.prototype.constructor = Milimetro3;
    measures.mm3 = Milimetro3;
    Milimetro3.prototype.toKilometro3 = function()
    {
        return new Kilometro3(this.valor/1000000000000000000);
    }
    Milimetro3.prototype.toCentimetro3 = function()
    {
        return new Centimetro3(this.valor / 1000);
    }
    Milimetro3.prototype.toMetro3 = function()
    {
        return new Metro3(this.valor/1000000000);
    }
    Milimetro3.prototype.toLitro = function()
    {
        return new Litro(this.valor / 1000000);
    }
    
  // ----------------------------------------------------- //

    function Litro(valor)
    {
        Volumen.call(this,valor,'litro');
    }
    Litro.prototype = new Volumen;
    Litro.prototype.constructor = Litro;
    measures.l = Litro;
    Litro.prototype.toMetro3 = function()
    {
        return new Metro3(this.valor/1000);
    }
    Litro.prototype.toKilometro3 = function()
    {
        return new Kilometro3(this.valor/1000000000000);
    }
    Litro.prototype.toCentimetro3 = function()
    {
        return new Centimetro3(this.valor * 1000);
    }
    Litro.prototype.toMilimetro3 = function()
    {
        return new Milimetro3(this.valor * 1000000);
    }
})(this);