class Cola {
    constructor(){
        this.datos = [];
    }

    enqueue(element){
        this.datos.push(element);
    }

    dequeue(){
        return this.datos.shift(); 
    }
}

const colaPrincipal = new Cola();
const colaPares = new Cola();
const colaImpares = new Cola();

colaPrincipal.enqueue("amarillo");
colaPrincipal.enqueue("rosa");
colaPrincipal.enqueue("rojo");
colaPrincipal.enqueue("verde");
colaPrincipal.enqueue("azul");
colaPrincipal.enqueue("negro");
colaPrincipal.enqueue("morado");
colaPrincipal.enqueue("blanco");
console.log(colaPrincipal.datos);

function separar (cola, par, impar){
    for(i = 0; i < cola.datos.length;i++){
        if(i % 2 == 0){
            par.datos.push(cola.datos[i]);
        }else{
            impar.datos.push(cola.datos[i]);
        }
    }
}


separar(colaPrincipal, colaPares, colaImpares);

console.log(colaPares.datos);
console.log(colaImpares.datos);


