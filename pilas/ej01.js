class Stack {
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }



    print(){
        console.log(this.stack);
    }
    

}
function longitud (pila, num){
    if (pila.stack.length < num){
        console.log("el numero es mayor a la longitud de la pila");
        return undefined;
    }else{
        return pila.stack.slice(0, num);
    }
    
}

const stack = new Stack();
stack.push('Manzana');
stack.push('Cebolla');
stack.push('Apio');
stack.push('Naranja');
stack.push('Papaya');
stack.push('Sandia');
stack.push('Melon');


console.log("pila");
stack.print();
console.log("nueva length de la pila");
console.log(longitud(stack, 4));


