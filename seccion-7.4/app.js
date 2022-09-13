let numeros = [1, 6, 4, 2, 1, 3, 7, 10, 5];
let mayor = -99999;


for (let i = 0; i <= numeros.length; i++)
    {
if (numeros[i] >= mayor){
    mayor = numeros[i];
}

    }

    console.log('El numero mayor es ' + mayor);