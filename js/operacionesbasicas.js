(function(){
  
    var measures = Medida.measures || {};
  
    function OperacionesBasicas(valor,tipo)
    {
      console.log("Accedo a clase Operaciones Básicas");
      Medida.call(this,valor,tipo);
      /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    }
    OperacionesBasicas.prototype = new Medida();
    OperacionesBasicas.prototype.constructor = OperacionesBasicas;

  // ----------------------------------------------------- //

    function Suma(valor)
    {
      console.log("Accedo a clase Suma");
      OperacionesBasicas.call(this,valor,'+');
    }
    Suma.prototype = new OperacionesBasicas;
    Suma.prototype.constructor = Suma;
    measures.c = Suma;
    Suma.prototype.operacion = function()
    {
      var resultado = (this.valor);
      return resultado;
    }
 
 })(this);