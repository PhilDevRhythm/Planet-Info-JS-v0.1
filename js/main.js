/*
//pre-test 
var myArray = ["What is the meaning of life?", 56, true];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
/*
//clases 1
/*
let age = prompt("Edad");
let nameFirst = prompt("Nombre")
let MONTH = prompt("Numero de Mes de nacimiento");
const YEAR = 2022;
let birthDate = YEAR - age;

let message = `${nameFirst} nacio en ${birthDate}`;
let message2 = `${nameFirst} nacio en ${MONTH}`;

alert(message);
alert(message2)

let Array1 = [];
Array1.push(message);
Array1.push(message2);

alert(Array1[0]);
alert(Array1[1]);
*/

//CLASES 2 - IF - ELSE

let Employee = [prompt("Ingrese el nombre del empleado")];
let VarEmployee = [Employee]
alert(VarEmployee)
let Employees = ["Phil", " J Doe1", " J Doe2", " J Doe3", " J Doe4", " J Doe5"];
alert("PREIF")

Employee.toLocaleLowerCase()

let isEqual = VarEmployee.toString() == Employees.toString();
if (isEqual = true){
    alert("Empleado ya ha sido ingresado")
} else {
    Employees.push(" " + Employee);
    alert("Empleado correctamente ingresado");
}

alert(Employees)
alert("POSTIF")















