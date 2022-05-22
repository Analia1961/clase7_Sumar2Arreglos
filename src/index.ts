//CLASE 7 - lunes 9 de mayo 2022
//Estructura de Datos - Arreglos
//Ejercicio 1
//Sumar Dos Arreglos

/* • Sumar los elementos de cada una de las posiciones
de dos vectores y guardar el resultado en otro vector
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario */
/*
Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9 
*/

// Declaro las variables
let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);
let indice: number;

//Sumo los valores y muestro

//Cargo el vector v1
for (indice = 0; indice < 6; indice++) {
  v1[indice] = Number(prompt("Ingrese el valor v1[" + indice + "]"));
}

console.log(v1);

//Cargo el vector v2
for (indice = 0; indice < 6; indice++) {
  v2[indice] = Number(prompt("Ingrese el valor de v2[" + indice + "]"));
}

console.log(v2);

for (indice = 0; indice < 6; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
}

console.log(vSuma);

/*
console.log("Cargando v1 ”);
cargarVector(v1, 6);
console.log("Cargando v2 ”);
cargarVector(v2, 6);
sumarVector(v1, v2, vSuma, 6);
console.log("Valores de v1 ");
mostrarVector(v1, 6) ;
Escribir console.log("Valores de v2 ");
mostrarVector(v2, 6) ;
console.log("Valores de vSuma ");
mostrarVector(vSuma, 6) ;*/
