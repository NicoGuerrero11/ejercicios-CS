class Stack{
    constructor(){
        this.stack = {};
        this.count = 0;
    }

    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }

    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }


}

function eliminar (pila, provi){
    while (pila != contenedor){
        provi.push(pila[pila.length - 1]);
        pila.pop();
    }
    return pila.stack;
}

const stack = new Stack();

stack.push("contenedor A")
stack.push("contenedor B")
stack.push("contenedor C")
stack.push("contenedor D")
stack.push("contenedor E")
stack.push("contenedor F")
stack.push("contenedor G")
stack.push("contenedor H")

console.log(stack.stack);

const provisional = new Stack()

let contenedor = Number(prompt("cual de los 7 contenedores deseas retirar? "));

console.log(eliminar(stack, provisional));