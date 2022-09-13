

let persona1 = {
nombre: 'Rodrigo',
edad: 37

};

let persona2 = {
    nombre: 'Ema',
    edad: 42
    
    };
    
    let persona3 = {
        nombre: 'Ale',
        edad: 38
        
        };
        

let personas =  [persona1, persona2, persona3];


for( let i = 0; i< personas.length; i++) {
 

let persona = personas [i];
    console.log (`${ persona.nombre} -- ${persona.edad}`);
 
}

