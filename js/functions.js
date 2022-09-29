function DrakeEq(a, b, c, d, e, f, g) {
    let resDrakeEq = a * b * c * d * e * f * g
    let showResult = document.getElementById("resDrakeEq")
    showResult.innerHTML = "<p> Valor N= </p>" + resDrakeEq + "<p> N = el número de civilizaciones de nuestra galaxia con las que podría ser posible la comunicación (es decir, que se encuentran en nuestro cono de luz pasado actual) </p>"
    let resDrakeStore = JSON.stringify(resDrakeEq)
    localStorage.setItem("savedDrakeRes", resDrakeStore)
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

    DrakeEq(varDrake1, varDrake2, varDrake3, varDrake4, varDrake5, varDrake6, varDrake7)
    let arraydata = []
    arraydata.push(+varDrake1, +varDrake2, +varDrake3, +varDrake4, +varDrake5, +varDrake6, +varDrake7)
    arraydataConverted = [JSON.stringify(arraydata[0]), JSON.stringify(arraydata[1]), JSON.stringify(arraydata[2]), JSON.stringify(arraydata[3]), JSON.stringify(arraydata[4]), JSON.stringify(arraydata[5])]
    localStorage.setItem("savedDrakeVars", arraydataConverted)

    return
}

function dataCheck() {
    arraydata = localStorage.getItem("savedDrakevars")
    captureDrakeData((localStorage.getItem("savedDrakeVars")[1]), (localStorage.getItem("savedDrakeVars")[3]), (localStorage.getItem("savedDrakeVars")[5]), (localStorage.getItem("savedDrakeVars")[7]), (localStorage.getItem("savedDrakeVars")[0]), (localStorage.getItem("savedDrakeVars")[2]), (localStorage.getItem("savedDrakeVars")[4]))
    let checkResult = document.getElementById("resDrakeEq")
    checkResult.innerHTML = "<p> Informacion almacenada en Bitacora de Calculos </p> "
    let showOnWeb = document.getElementById("drakeCapture1")
    let showonWeb2 = document.getElementById("compareDrake")
    let savedData = localStorage.getItem("savedDrakeVars")
    console.log(savedData.length); 
    console.log(savedData)

    let tableData0 = document.getElementById("savedData0")
    tableData0.innerHTML = savedData[0]
    let tableData1 = document.getElementById("savedData2")
    tableData1.innerHTML = savedData[2]
    let tableData2 = document.getElementById("savedData4")
    tableData2.innerHTML = savedData[4]
    let tableData3 = document.getElementById("savedData6")
    tableData3.innerHTML = savedData[6]
    let tableData4 = document.getElementById("savedData8")
    tableData4.innerHTML = savedData[8]
    let tableData5 = document.getElementById("savedData10")
    tableData5.innerHTML = savedData[10]
    let tableData6 = document.getElementById("savedData12")
    tableData6.innerHTML = savedData[12]
    return
}

function captureDrakeData(a, b, c, d, e, f, g, resDrakeEq) {
    var dataStorage = []
    dataStorage[0] = parseInt(a)
    dataStorage[1] = parseInt(b)
    dataStorage[2] = parseInt(c)
    dataStorage[3] = parseInt(d)
    dataStorage[4] = parseInt(e)
    dataStorage[5] = parseInt(f)
    dataStorage[6] = parseInt(g)
    dataStorage[7] = parseInt(resDrakeEq)
}

let drakeForm1 = document.getElementsByName("checkEqDrake");
console.log(drakeForm1);
drakeForm1.onclick = () => dataCheck();


//EXPORT BUTTONS FUNCTIONS
function exportXLSX(){
    new TableExport(document.getElementsByTagName('tableDrakeData'))
    return
}

let buttonExportXLSX = document.getElementById("butExpXSLX")
buttonExportXLSX.onclick = () => {"click", exportXLSX() }

// EXPORT CODE







