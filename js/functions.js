function DrakeEq(a, b, c, d, e, f, g) {
    let resDrakeEq = a * b * c * d * e * f * g
    // alert(resBox)
    console.log(resDrakeEq);
    let showResult = document.getElementById("resDrakeEq")
    showResult.innerHTML = "<p> Valor N= </p>" + resDrakeEq + "<p> N = el número de civilizaciones de nuestra galaxia con las que podría ser posible la comunicación (es decir, que se encuentran en nuestro cono de luz pasado actual) </p>"
    console.log(showResult.innerHTML);
    console.log("funcion DrakeEq ejecutada")
    console.log("valor " + resDrakeEq);
    return

}
function getDrakeVars() {
    varDrake1 = +document.getElementsByName("varDrake1")[0].value
    varDrake2 = +document.getElementsByName("varDrake2")[0].value
    varDrake3 = +document.getElementsByName("varDrake3")[0].value
    varDrake4 = +document.getElementsByName("varDrake4")[0].value
    varDrake5 = +document.getElementsByName("varDrake5")[0].value
    varDrake6 = +document.getElementsByName("varDrake6")[0].value
    varDrake7 = +document.getElementsByName("varDrake7")[0].value
    console.log("funcion getDrakeVars ejecutada")
    DrakeEq(varDrake1, varDrake2, varDrake3, varDrake4, varDrake5, varDrake6, varDrake7)
    return
}

function dataCheck() {
        let checkResult = document.getElementById("resDrakeEq")
        checkResult.innerHTML  = "<p> Informacion almacenada en Bitacora de Calculos </p> "
        console.log("Informacion almacenada en Bitacora de Calculos"); 
        return     
    }

let drakeForm1 = document.getElementsByName("checkEqDrake");
console.log(drakeForm1);
drakeForm1.onclick = () => dataCheck();





