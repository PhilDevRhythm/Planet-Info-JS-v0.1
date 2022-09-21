function showPlanetInfo(planet) {
    let tempInfo = []
    tempInfo = SolarSystem[planet]
    let planetName = tempInfo.nombre
    let planetSats = tempInfo.Sats
    let planetLife = tempInfo.vida
    let planetDistance = tempInfo.distance
    let planetImage = tempInfo.imageLink
    let imageTemp = document.getElementById("showImage")
    imageTemp.innerHTML = '<img src=' + planetImage + '></img>'
    let textColTemp = document.getElementById("showData1")
    textColTemp.innerHTML = '<p> El planeta ' + planetName  +  ' tiene conocidos hasta el dia de hoy ' + planetSats + ' lunas o satelites naturales</p>' 
    let textColTemp2 = document.getElementById("showData2")
    textColTemp2.innerHTML = planetName + '<p> esta a ' + planetDistance * 150 + ' millones de kilometros del planeta Tierra</p>'
    if (planetLife == true){
        textColTemp2.innerHTML = '<p> En el planeta ' + planetName + ' hay seres vivos</p>'
    }else{
        textColTemp2.innerHTML = '<p> En el planeta ' + planetName + ' no hay vida conocida</p>'
    }
    console.log(planetSats);
    return
}
 
const SolarSystem = [
    { id: "SS1", nombre: "Mercurio", Sats: 0, vida: false, distance: 0.39, imageLink: "../images/mercurio.jpg"},
    { id: "SS2", nombre: "Venus", Sats: 0, vida: false, distance: 0.72, imageLink: "../images/venus.webp"},
    { id: "SS3", nombre: "Tierra", Sats: 1, vida: true, distance: 1, imageLink: "../images/mercurio.jpg"},
    { id: "SS4", nombre: "Marte", Sats: 2, vida: false, distance: 1.52, imageLink: "../images/mars.png"},
    { id: "SS5", nombre: "Jupiter", Sats: 79, vida: false, distance: 5.20, imageLink: "../images/mercurio.jpg"},
    { id: "SS6", nombre: "Saturno", Sats: 82, vida: false, distance: 9.58, imageLink: "../images/mercurio.jpg"},
    { id: "SS7", nombre: "Urano", Sats: 27, vida: false, distance: 19.23, imageLink: "../images/mercurio.jpg"},
    { id: "SS8", nombre: "Neptuno", Sats: 14, vida: false, distance: 30.1, imageLink: "../images/neptuno.jpg"}
]

//funciones para eleccion 
//ELECCION DE PLANETA

function choosePlanet(planet) {
    let planetInput = planet
    switch (planetInput) {
        case "mercurio":
            showPlanetInfo(0)
            break;
        case "venus":
            showPlanetInfo(1)
            break;
        case "tierra":
            showPlanetInfo(2)
            break;
        case "marte":
            showPlanetInfo(3)
            break;
        case "jupiter":
            showPlanetInfo(4)
            break;
        case "saturno":
            showPlanetInfo(5)
            break;
        case "urano":
            showPlanetInfo(6)
            break;
        case "neptuno":
            showPlanetInfo(7)
            break;
        default:
    }
}
// BUTTONS

let butPl1 = document.getElementById("pl1")
let butPl2 = document.getElementById("pl2")
let butPl3 = document.getElementById("pl3")
let butPl4 = document.getElementById("pl4")
let butPl5 = document.getElementById("pl5")
let butPl6 = document.getElementById("pl6")
let butPl7 = document.getElementById("pl7")
let butPl8 = document.getElementById("pl8")
butPl1.onclick = () => {choosePlanet('mercurio'),event.preventDefault(),console.log("VISTO")}
butPl2.onclick = () => {choosePlanet('venus'), event.preventDefault()} 
butPl3.onclick = () => {choosePlanet('tierra'),event.preventDefault()}
butPl4.onclick = () => {choosePlanet('marte'),event.preventDefault()}
butPl5.onclick = () => {choosePlanet('jupiter'),event.preventDefault()}
butPl6.onclick = () => {choosePlanet('saturno'),event.preventDefault()}
butPl7.onclick = () => {choosePlanet('urano'),event.preventDefault()}
butPl8.onclick = () => {choosePlanet('neptuno'),event.preventDefault()}

