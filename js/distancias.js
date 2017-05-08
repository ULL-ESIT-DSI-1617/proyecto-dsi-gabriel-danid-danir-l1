(function(){
  
    var measures = Medida.measures || {};

    function Distancia(valor,tipo)
    {
      console.log("Accedo a clase Distancia");
      Medida.call(this,valor,tipo);
    }
    Distancia.prototype = new Medida();
    Distancia.prototype.constructor = Distancia;

  // ----------------------------------------------------- //
  
    function Kilometro(valor)
    {
      Distancia.call(this,valor,'Km');

    }
    Kilometro.prototype = new Distancia;
    Kilometro.prototype.constructor = Kilometro;
    measures.km = Kilometro;
    Kilometro.prototype.toMetro = function()
    {
      return new Metro(this.valor * 1000);
    }
    Kilometro.prototype.toCentimetro = function()
    {
      return new Kilometro(this.valor * 100000);
    }
    Kilometro.prototype.toMilimetro = function()
    {
      return new Milimetro(this.valor * 1000000);
    }
    Kilometro.prototype.toPulgada = function()
    {
      return new Pulgada(this.toCentimetro().valor * 0.39370);
    }

  // ----------------------------------------------------- //

    function Centimetro(valor)
    {
      Distancia.call(this,valor,'cm');

    }
    Centimetro.prototype = new Distancia;
    Centimetro.prototype.constructor = Centimetro;
    measures.cm = Centimetro;
    Centimetro.prototype.toMetro = function()
    {
      return new Metro(this.valor / 100);
    }
    Centimetro.prototype.toKilometro = function()
    {
      return new Kilometro(this.valor / 10000);
    }
    Centimetro.prototype.toMilimetro = function()
    {
      return new Milimetro(this.valor * 10);
    }
    Centimetro.prototype.toPulgada = function()
    {
      return new Pulgada(this.valor * 0.39370);
    }

  // ----------------------------------------------------- //

    function Metro(valor)
    {
      Distancia.call(this,valor,'m');
    }
    Metro.prototype = new Distancia;
    Metro.prototype.constructor = Metro;
    measures.m = Metro;
    Metro.prototype.toKilometro = function()
    {
      return new Kilometro(this.valor / 1000);
    }
    Metro.prototype.toCentimetro = function()
    {
      return new Centimetro(this.valor * 100);
    }
    Metro.prototype.toMilimetro = function()
    {
      return new Milimetro(this.valor * 1000);
    }
    Metro.prototype.toPulgada = function()
    {
      return new Pulgada(this.toCentimetro().valor * 0.39370);
    }

  // ----------------------------------------------------- //

    function Milimetro(valor)
    {
    Distancia.call(this,valor,'mm');
    }
    Milimetro.prototype = new Distancia;
    Milimetro.prototype.constructor = Milimetro;
    measures.mm = Milimetro;
    Milimetro.prototype.toKilometro = function()
    {
        return new Kilometro(this.valor/1000000);
    }
    Milimetro.prototype.toCentimetro = function()
    {
        return new Centimetro(this.valor/10);
    }
    Milimetro.prototype.toMetro = function()
    {
        return new Metro(this.valor/1000);
    }
    Milimetro.prototype.toPulgada = function()
    {
        return new Pulgada(this.toCentimetro().valor * 0.39370);
    }

  // ----------------------------------------------------- //

    function Pulgada(valor){
      Distancia.call(this,valor,'in');
    }
    Pulgada.prototype = new Distancia;
    Pulgada.prototype.constructor = Pulgada;
    measures.p = Pulgada;
    Pulgada.prototype.toCentimetro = function()
    {
        return new Centimetro(this.valor / 0.39370);
    }

})(this);