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

    peek(){
        return this.stack[this.stack.length - 1];
    }



    print(){
        console.log(this.stack);
    }
    
}
function reemplazar(pila, nuevo, viejo){

    while (pila.stack[pila.stack.length - 1] !== viejo){
        pila.stack.pop();
    }
    if (pila.stack[pila.stack.length - 1] === viejo){
        pila.stack[pila.stack.length - 1] = nuevo;
    }
    return pila;   

}



const stack = new Stack;
stack.push(3);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(1);
stack.push(2);
stack.push(5);
stack.push(5);
stack.print();


console.log(reemplazar(stack, 7, 2));