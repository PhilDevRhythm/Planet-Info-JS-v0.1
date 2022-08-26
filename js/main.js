let number = 9 //prompt("Ingresa un numero para ver si es divisible por 9 exacto")
let divisionPor9 = number / 9;
let resultFinalTest = divisionPor9 - Math.floor(divisionPor9);
let numberPlus = number + 1;

divisionCheck = Math.floor(divisionPor9);

console.log("Test division");
console.log(divisionCheck);
console.log("Test numero");
console.log(number);
console.log("Tests division por 9");
console.log(divisionPor9);
console.log("Test Resultado");
console.log(resultFinalTest);
console.log("--------------------------------------------------");
console.log("Resultado");

console.log("--------------------------------------------------");

for (let number = 0; number <= numberPlus; number++){
    
    console.log(number)
    if (resultFinalTest !== 0) {
        console.log("Numero tiene decimal");
        
    } else {
        console.log("Numero Entero");
        
    }
} 








/*+if (resultado === 9 || 18 || 27 || 36 || 45 || 54 || 63 || 72 || 81 || 90 || 99) {
    console.log("Numero es divisible en 9")
} else {
    console.log("Numero no es divisible por 9");
};
*/

/*numero2 = 82 / 9

console.log(numero2)
if (numero2 !== 9) {
    console.log("error");
} else {
    console.log("its ok")
}
*/

