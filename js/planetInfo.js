//Imprime en pantalla la info del planeta

function showPlanetInfo(planet) {
    let tempInfo = []
    tempInfo = SolarSystem[planet]
    let planetName = tempInfo.nombre
    let planetSats = tempInfo.Sats
    let planetLife = tempInfo.vida
    let planetDistance = tempInfo.distance
    let planetImage = tempInfo.imageLink

    let imageTemp = document.getElementById("showImage")

    imageTemp.innerHTML = '<img src=' + planetImage + ' class="imageOfTheDay img-fluid rounded-start"></img>'

    let textColTemp = document.getElementById("showData1")

    textColTemp.innerHTML = '<h2 class="planet-text"> Planet ' + planetName + ' has ' + planetSats + ' known moons</h2>'

    let textColTemp2 = document.getElementById("showData2")

    textColTemp2.innerHTML = '<h2 class="planet-text">' + planetName + ' is  ' + planetDistance * 150 + ' million kilometers from planet Earth</h2>'

    let textColTemp4 = document.getElementById("showData4")

    textColTemp4.innerHTML = '<h2 class="planet-text">'

    let textColTemp3 = document.getElementById("showData3")

    if (planetLife == true) {
        textColTemp3.innerHTML = '<h2 class="planet-text"> On planet ' + planetName + ' life exists</h2>'
    } else {
        textColTemp3.innerHTML = '<h2 class="planet-text"> On planet ' + planetName + ' there are no life forms found yet</h2>'
    }

    let apiNasaURL = 'https://images-api.nasa.gov/search?q=' + planetName

    if (planetName == "Mars") {
        apiNasaURL = 'https://images-api.nasa.gov/search?q=planet+' + planetName
    } else {

    }

    const extraDataPlace = document.getElementById("showExtraData")
    var randomNumber1 = Math.floor(Math.random() * 40)
    var randomNumber2 = Math.floor(Math.random() * 40)
    var randomNumber3 = Math.floor(Math.random() * 40)
    const fixedNumber1 = randomNumber1
    const fixedNumber2 = randomNumber2
    const fixedNumber3 = randomNumber3

    fetch(apiNasaURL)
        .then((response) => response.json(), console.log("response ok"))
        .then((result) => {
            let res1 = result.collection.items[0].data[0].title
            let res2 = result.collection.items[fixedNumber1].links[0].href
            let res3 = result.collection.items[fixedNumber2].links[0].href
            let res4 = result.collection.items[fixedNumber3].links[0].href
            let resText2 = result.collection.items[fixedNumber1].data[0].description_508
            let resText3 = result.collection.items[fixedNumber2].data[0].description_508
            let resText4 = result.collection.items[fixedNumber3].data[0].description_508
            if (resText2 === undefined) {
                resText2 = result.collection.items[fixedNumber1].data[0].description
            } else if (resText3 === undefined) {
                resText3 = result.collection.items[fixedNumber2].data[0].description
            } else if (resText4 === undefined) {
                resText4 = result.collection.items[fixedNumber3].data[0].description
            } else { }

            let col1 = document.getElementById("showExtraData")
            col1.innerHTML = `
                        <div class="row"><br><br>          
                            <div class="col mb-4 text-bg-dark extra-pics">
                              <img src="${res2}" style="width:100%;max-width:300px" class="p-3 imageOfTheDay card-img-top img-fluid rounded-start text-bg-dark"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resText2}</p>
                                <a href="#" id="botonMasInfo1" class="btn btn-info">View</a>
                               </div>
                            </div>
                            <div class="col mb-4 text-bg-dark extra-pics">
                            <img src="${res3}" id="extraPics" style="width:100%;max-width:300px" class="p-3 card-img-top imageOfTheDay img-fluid rounded-start text-bg-dark"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resText3}</p>
                                <a href="#" id="botonMasInfo2" class="btn btn-info">View</a>
                                </div>    
                            </div>
                            <div class="col mb-4 text-bg-dark extra-pics">
                            <img src="${res4}" id="extraPics" style="width:100%;max-width:300px" class="p-3 card-img-top imageOfTheDay img-fluid rounded-start"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resText4}</p>
                                <a href="#" id="botonMasInfo3" class="btn btn-info">View</a>
            `
        })
}
//BD


const SolarSystem = [
    { id: "SS1", nombre: "Mercury", Sats: 0, vida: false, distance: 0.39, imageLink: "../images/mercurio.jpg" },
    { id: "SS2", nombre: "Venus", Sats: 0, vida: false, distance: 0.72, imageLink: "../images/venus.jpg" },
    { id: "SS3", nombre: "Earth", Sats: 1, vida: true, distance: 1, imageLink: "../images/tierra.jpg" },
    { id: "SS4", nombre: "Mars", Sats: 2, vida: false, distance: 1.52, imageLink: "../images/mars.png" },
    { id: "SS5", nombre: "Jupiter", Sats: 79, vida: false, distance: 5.20, imageLink: "../images/jupiter.jpg" },
    { id: "SS6", nombre: "Saturn", Sats: 82, vida: false, distance: 9.58, imageLink: "../images/Saturn.jpg" },
    { id: "SS7", nombre: "Uranus", Sats: 27, vida: false, distance: 19.23, imageLink: "../images/urano.jpg" },
    { id: "SS8", nombre: "Neptune", Sats: 14, vida: false, distance: 30.1, imageLink: "../images/neptuno.jpg" }
]

//Eleccion de PLANETA

function choosePlanet(planet) {
    let planetInput = planet
    switch (planetInput) {
        case "mercury":
            showPlanetInfo(0)
            break;
        case "venus":
            showPlanetInfo(1)
            break;
        case "earth":
            showPlanetInfo(2)
            break;
        case "mars":
            showPlanetInfo(3)
            break;
        case "jupiter":
            showPlanetInfo(4)
            break;
        case "saturn":
            showPlanetInfo(5)
            break;
        case "uranus":
            showPlanetInfo(6)
            break;
        case "neptune":
            showPlanetInfo(7)
            break;
        default:

    }
    return planet
}
// Botones de planetas

let butPl1 = document.getElementById("pl1")
let butPl2 = document.getElementById("pl2")
let butPl3 = document.getElementById("pl3")
let butPl4 = document.getElementById("pl4")
let butPl5 = document.getElementById("pl5")
let butPl6 = document.getElementById("pl6")
let butPl7 = document.getElementById("pl7")
let butPl8 = document.getElementById("pl8")
butPl1.onclick = () => { choosePlanet('mercury'), event.preventDefault() }
butPl2.onclick = () => { choosePlanet('venus'), event.preventDefault() }
butPl3.onclick = () => { choosePlanet('earth'), event.preventDefault() }
butPl4.onclick = () => { choosePlanet('mars'), event.preventDefault() }
butPl5.onclick = () => { choosePlanet('jupiter'), event.preventDefault() }
butPl6.onclick = () => { choosePlanet('saturn'), event.preventDefault() }
butPl7.onclick = () => { choosePlanet('uranus'), event.preventDefault() }
butPl8.onclick = () => { choosePlanet('neptune'), event.preventDefault() }

//NASA EXTRA DATA per PLANET

// let planetName =
    // let apiNasaURL = "https://images-api.nasa.gov/search?q=mercury"
// const extraDataPlace = document.getElementById("showExtraData")
// console.log(apiNasaURL);

// function nasaAPIextraInfo(apiNasaURL) {
//     fetch(apiNasaURL)
//         .then((response) => response.json(), console.log("response ok"))
//         .then((result) => {
//             let res1 = result.collection.items[0].data[0].title
//             let res2 = result.collection.items[1].links[0].href
//             let res3 = result.collection.items[2].links[0].href
//             let res4 = result.collection.items[3].links[0].href

//             console.log(res1);
//             console.log(res2);
//             console.log(res3);
//             console.log(res4);


//             let col1 = document.getElementById("showExtraData")
//             col1.innerHTML = `<br><br>
//                             <h4 class="planet-text text-center">Other Pics</h4>
//                               <br>
//                               <br>
//                               <img src="${res2}" style="width:100%;max-width:300px" class="imageOfTheDay img-fluid rounded-start text-bg-dark p-0"></img>
//                               <img src="${res3}" id="extraPics" style="width:100%;max-width:300px" class=" p-0 imageOfTheDay img-fluid rounded-start text-bg-dark"></img>
//                               <img src="${res4}" id="extraPics" style="width:100%;max-width:300px" class="p-0 imageOfTheDay img-fluid rounded-start text-bg-dark"></img>
//             `
//         })
//     console.log("final forEach");
// }



