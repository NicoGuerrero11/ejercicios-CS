class Stack {
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
        if (this.stack.length == 0){
            return undefined;
        }
        return this.stack.pop();
    }

    peak(){
        if (this.datos.length == 0){
            return undefined;
        }
        return this.datos[this.datos.length - 1];
    }

    

}
function intercambiar(ida, vuelta){
    for (i= 0; i < nElementos; i++){
        vuelta.stack.push(ida.stack[ida.stack.length - 1]);
        ida.stack.pop();   
    } 
    
    
    
}




const ida = new Stack();
ida.push("Malaga");
ida.push("Sevilla");
ida.push("terragona");
ida.push("Madrid");
ida.push("Barcelona");
console.log(`recorrido: ${ida.stack}`);

let nElementos = ida.stack.length;


const vuelta = new Stack();
intercambiar(ida, vuelta);
console.log(`Regreso: ${vuelta.stack}`);




