let Employee = ["Phil"];
let VarEmployee = [Employee]
//alert(VarEmployee)
let Employees = ["Phil", " J Doe1", " J Doe2", " J Doe3", " J Doe4", " J Doe5"];
//alert("PREIF")

//Employee.toLocaleLowerCase()

//if ([Employee].indexOf(Employees)) {

let isEqual = VarEmployee.toString() == Employees.toString();
if (isEqual = true){
    //alert("Empleado ya ha sido ingresado")
} else {
    Employees.push(" " + Employee);
    //alert("Empleado correctamente ingresado");
}
console.log(isEqual)
//alert(Employees)
//alert("POSTIF")
