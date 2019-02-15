var expect = require("chai").expect;
var Stack = require("../class/Stack");



//Definir tamaño de la pila.
describe("Definir tamano", function(){


    it("el resultado debe ser 3 ", function(){
    var results = Stack.definirsize(3);
    expect(results).to.equal(3);
    
    });
    });
    //Agregar elemento a la pila.
describe("ADD", function(){


    it("el resultado debe ser 1", function(){
        var results = Stack.addElement("Juan");
expect(results).to.equal(1);

    });
});
//Remover elementos .
describe("POP", function(){


it("el resultado debe ser 1", function(){
var results = Stack.removeElement("Juan");
expect(results).to.equal(1);

});
});
//último elemento ingresado 
describe("LastOne", function(){


it("el resultado debe ser Juan", function(){
var results = Stack.lastElement();
expect(results).to.equal("Juan");

});
});

//Obtener el tamaño actual.
describe("AllElements", function(){


it("el resultado debe ser 3 ", function(){
var results = Stack.totElements();
expect(results).to.equal(3);

});
});
//Agregar elemento en pila, con un tamaño menor.
describe("Verify add new element", function(){


it("el resultado debe ser Error al insertar elemento ", function(){
var results = Stack.VerifySize("Pablo");
expect(results).to.equal("Error al insertar elemento");

});
});
