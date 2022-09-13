
class Carro {

    constructor(marca1, tipo1, puertas){

        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas;

    this.creadoEn = 'Hoy';
    this.encendido = false; 
    this.gasolina = 100;
} 

encenderCarro() {
    if (this.encendido) {
        console.error ('El carro ya esta encendido')
    }else{ 
    this.encendido = true;
    
}
return this;

}    
 
realizarViaje(consumo) {

    if(!this.encendido) return console.log('El carro esta apagado');

    if (consumo > this.gasolina) return console.log ('No puede realizar el viaje gasolina ' + this.gasolina);
    
    this.gasolina = this.gasolina - consumo;

    return ' le queda ' + this.gasolina;
 

/* if(this.encendido){
    if (consumo > this.gasolina){
    console.log ('No puede realizar el viaje  ' + this.gasolina);
}else {
    this.gasolina = this.gasolina - consumo;
    return ' le queda ' + this.gasolina;
}
    }else {console.log('El carro esta apagado');
}*/
   
}

}
let carro = new Carro('Mazda', 'Sedan', 2);
let carro1= new Carro ('Nissan', 'SUV', 5);
console.log (carro); 