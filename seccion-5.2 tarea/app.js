
function calcularNota (nota){

 
    let notaletra= '';
    
    if (nota >= 90)
    {notaletra = 'A';
    }
    else if (nota >= 80) {
        notaletra = 'B';
    }
    
    else if (nota >= 70 ){
        notaletra = 'C';
    }
    
    else if (nota >= 60){
        notaletra = 'D';
    }
    
    else {notaletra = 'F';
    
    }
    
         
    console.log(nota + ' es igaul a ' + notaletra);
    

 
}

calcularNota (100);
calcularNota (80);
calcularNota (59);
