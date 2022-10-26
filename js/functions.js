function DrakeEq(a, b, c, d, e, f, g) {



    a = document.getElementById("varDrake0").value;
    b = document.getElementById("varDrake1").value;
    c = document.getElementById("varDrake2").value;
    d = document.getElementById("varDrake3").value;
    e = document.getElementById("varDrake4").value;
    f = document.getElementById("varDrake5").value;
    g = document.getElementById("varDrake6").value;

    let resDrakeEq = a * b * c * d * e * f * g

    let saveDrakeForm = []
    saveDrakeForm.push(a)
    saveDrakeForm.push(b)
    saveDrakeForm.push(c)
    saveDrakeForm.push(d)
    saveDrakeForm.push(e)
    saveDrakeForm.push(f)
    saveDrakeForm.push(g)
    saveDrakeForm.push(resDrakeEq)

    let convert = JSON.stringify(saveDrakeForm)
    localStorage.setItem("savedDrakeForm", convert)
    
    let showResult = document.getElementById("resDrakeEqFinal")
    showResult.innerHTML = `<p class="lead"> N value = ${resDrakeEq}
                            <br>
                            <p class="lead"> N = the number of civilizations of our galaxy with chances to establish communication between civilizations that are in our actual past cone light.
                            </p>`
    event.preventDefault()

}

let formButtonCalc = document.getElementById("calcEqDrake")
let formButtonSave = document.getElementById("checkEqDrake")

formButtonCalc.onclick = () => { DrakeEq(), event.preventDefault() }
formButtonSave.onclick = () => { dataCheck(), event.preventDefault() }


function dataCheck() {
    tempdata = localStorage.getItem("savedDrakeForm")
    testdata = JSON.parse(tempdata)
    console.log(tempdata);
    console.log(testdata);
    let checkResult = document.getElementById("resDrakeEqAlmacenar");
    checkResult.innerHTML = `    <div class="container-xl text-center text-bg-dark">
                                <br>
                                <pclass="lead"> Latest saved data <br>Drake's equation</p><br>
                                <table tag='tableDrakeData' id='tableDrake'>
                                    <tr>
                                        <th>Star formation rate</th>
                                        <th>% of Star with planets</th>
                                        <th>% of fully formed planets</th>
                                        <th>Chance to have life</th>
                                        <th>Chance to have intelligent life</th>
                                        <th>Chance to have comunications to space</th>
                                        <th>Time interval number</th>
                                        <th>Drake Equation Result</th>
                                    </tr>
                                    <tr>
                                        <td id="savedData0"></td>
                                        <td id="savedData1"></td>
                                        <td id="savedData2"></td>
                                        <td id="savedData3"></td>
                                        <td id="savedData4"></td>
                                        <td id="savedData5"></td>
                                        <td id="savedData6"></td>
                                        <td id="savedData7"></td>
                                    </tr>
                                </table>
                                <br>
                                <button class="btn btn-info" type="button" style="width:100px" id="butExpXSLX">Export to .xlsx</button>
                                <br>
                                <br>
                            </div>`
    let tableData0 = document.getElementById("savedData0")
    tableData0.innerHTML = testdata[0]
    let tableData1 = document.getElementById("savedData1")
    tableData1.innerHTML = testdata[1]
    let tableData2 = document.getElementById("savedData2")
    tableData2.innerHTML = testdata[2]
    let tableData3 = document.getElementById("savedData3")
    tableData3.innerHTML = testdata[3]
    let tableData4 = document.getElementById("savedData4")
    tableData4.innerHTML = testdata[4]
    let tableData5 = document.getElementById("savedData5")
    tableData5.innerHTML = testdata[5]
    let tableData6 = document.getElementById("savedData6")
    tableData6.innerHTML = testdata[6]
    let tableData7 = document.getElementById("savedData7")
    tableData7.innerHTML = testdata[7]

    let buttonExportXLSX = document.getElementById("butExpXSLX")
    buttonExportXLSX.onclick = () => { excel2() }

    return
}

// EXPORT BUTTONS


function excel2() {
    $("#tableDrake").table2excel({
        exclude: ".noExl",
        name: "Drake-Table-result",
        filename: "Planetary-info-drakeTable",
        fileext: ".xls"
    });
};









