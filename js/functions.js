function DrakeEq(a, b, c, d, e, f, g) {
    let resDrakeEq = a * b * c * d * e * f * g
    let showResult = document.getElementById("resDrakeEqFinal")
    showResult.innerHTML = `<p> Valor N = ${resDrakeEq}
                            <br>
                            <p> N = el número de civilizaciones de nuestra galaxia con las que podría ser posible la comunicación (es decir, que se encuentran en nuestro cono de luz pasado actual)
                            </p>`
    let resDrakeStore = JSON.stringify(resDrakeEq)
    localStorage.setItem("savedDrakeRes", resDrakeStore)
    event.preventDefault()
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
    event.preventDefault()

    return
}

let formButtonCalc = document.getElementById("calcEqDrake")
let formButtonSave = document.getElementById("checkEqDrake")

formButtonCalc.onclick = () => { getDrakeVars(), event.preventDefault() }
formButtonSave.onclick = () => { dataCheck(), event.preventDefault() }


function dataCheck() {
    arraydata = localStorage.getItem("savedDrakevars")
    captureDrakeData((localStorage.getItem("savedDrakeVars")[1]), (localStorage.getItem("savedDrakeVars")[3]), (localStorage.getItem("savedDrakeVars")[5]), (localStorage.getItem("savedDrakeVars")[7]), (localStorage.getItem("savedDrakeVars")[0]), (localStorage.getItem("savedDrakeVars")[2]), (localStorage.getItem("savedDrakeVars")[4]))
    let checkResult = document.getElementById("resDrakeEqAlmacenar");
    let savedData = localStorage.getItem("savedDrakeVars")
    checkResult.innerHTML =`    <div class="container-xl text-center text-bg-dark">
                                <br>
                                <p> Ultimos datos guardados de<br>Equacion de Drake</p><br>
                                <table tag='tableDrakeData' id='tableDrake'>
                                    <tr>
                                        <th>Tasa de formacion de estrellas</th>
                                        <th>Estrellas con planetas</th>
                                        <th>Planetas potenciales</th>
                                        <th>Vida inminente</th>
                                        <th>Vida inteligente</th>
                                        <th>Señales fuera de su planeta</th>
                                        <th>Periodo de tiempo</th>
                                    </tr>
                                    <tr>
                                        <td id="savedData0"></td>
                                        <td id="savedData2"></td>
                                        <td id="savedData4"></td>
                                        <td id="savedData6"></td>
                                        <td id="savedData8"></td>
                                        <td id="savedData10"></td>
                                        <td id="savedData12"></td>
                                    </tr>
                                </table>
                                <br>
                                <button class="btn btn-info" type="button" style="width:100px" id="butExpXSLX">Exportar a .xlsx</button>
                                <br>
                                <br>
                            </div>`
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
    let buttonExportXLSX = document.getElementById("butExpXSLX")
    buttonExportXLSX.onclick = () => { excel2() }

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
    event.preventDefault()
}




//EXPORT FUNCTIONS
function exportXLSX() {
    let tableExportVar = TableExport(document.getElementsByTagName('tableDrakeData'))
    return tableExportVar
}

// EXPORT BUTTONS


function excel2() {
    console.log("entre");
    $("#tableDrake").table2excel({
        exclude: ".noExl",
        name: "Drake-Table-result",
        filename: "Planetary-info-drakeTable",
        fileext: ".xls"
    });
    console.log("sali");
};









