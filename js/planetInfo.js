function showPlanetInfo(planet) {
    let tempInfo = []
    tempInfo = SolarSystem[planet]
    let planetName = tempInfo.nombre
    let planetSats = tempInfo.Sats
    let planetLife = tempInfo.vida
    let planetDistance = tempInfo.distance
    let planetImage = tempInfo.imageLink
    console.log(tempInfo);
    console.log(planetName);
    console.log(planetSats);
    console.log(planetDistance);
    console.log(planetLife);
    console.log(planetImage);
    let imageTemp = document.getElementById("showImage")
    imageTemp.innerHTML = '<img src=' + planetImage + '></img>'
    return
}
 
const SolarSystem = [
    { id: "SS1", nombre: "Mercurio", Sats: 0, vida: "NO", distance: 0.39, imageLink: "../images/mercurio.jpg"},
    { id: "SS2", nombre: "Venus", Sats: 0, vida: "NO", distance: 0.72, imageLink: "../images/mercurio.jpg"},
    { id: "SS3", nombre: "Tierra", Sats: 1, vida: "SI", distance: 1, imageLink: "../images/mercurio.jpg"},
    { id: "SS4", nombre: "Marte", Sats: 2, vida: "NO", distance: 1.52, imageLink: "../images/mercurio.jpg"},
    { id: "SS5", nombre: "Jupiter", Sats: 79, vida: "NO", distance: 5.20, imageLink: "../images/mercurio.jpg"},
    { id: "SS6", nombre: "Saturno", Sats: 82, vida: "NO", distance: 9.58, imageLink: "../images/mercurio.jpg"},
    { id: "SS7", nombre: "Urano", Sats: 27, vida: "NO", distance: 19.23, imageLink: "../images/mercurio.jpg"},
    { id: "SS8", nombre: "Neptuno", Sats: 14, vida: "NO", distance: 30.1, imageLink: "../images/neptuno.jpg"}
]

//funciones para eleccion

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

//ELECCION DE PLANETA

