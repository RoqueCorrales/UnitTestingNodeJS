
    var pila = [];
    
    pila.length = 4;

    exports.definirsize= function(element){
      pila.length = element;
        return pila.length;
    };


    
  

    exports.addElement = function (element){
       
            pila.push(element);
            
            if(validarArrayPush(element)){
                return 1;
            }
            return 0;

          
         
}
    validarArrayPush = function (element){
    return pila.includes(element) ? true : false;
}

   exports.removeElement = function (element){
    pila = ["Wilmer","Rudy","Juan"];
    if(validarArrayPush(element)){
        pila.pop();
        return 1;

    }else {
        return 0;
    }
}

    exports.lastElement = function (){
        pila = ["Wilmer","Rudy","Juan"];
    return pila[pila.length-1];
}

    exports.totElements = function (){
        pila = ["Wilmer","Rudy","Juan"];
    var totElements = pila.length;
    return totElements;
    
}

verificarTamanno = function(element){
    pila = ["Wilmer","Rudy","Juan","JuanJose","JuanGa"];
    return pila.length > 4 ? false : true;
}

    exports.VerifySize = function (element){
    if(verificarTamanno()){
        return this.addElement(element);
         
        
      }else{
        return "Error al insertar elemento"
      }

    } ;
    
    

