// FUNCION CONSTRUCTORA

class Planets {
    constructor(nombre, sats, vida, distance) {
        this.nombre = nombre;
        this.sats = sats;
        this.vida = vida;
        this.distance = distance;
    }
    // FUNCION INFORMAR()
    informar() {
        if ((this.distance * 150) > 200) {
            
            return

        } else if ((this.distance * 150) == 150) {
 
            return

        } else {

            return
        }
    }
}

const SolarSystem = [
    { nombre: "Mercurio", Sats: 0, vida: "NO", distance: 0.39 },
    { nombre: "Venus", Sats: 0, vida: "NO", distance: 0.72 },
    { nombre: "Tierra", Sats: 1, vida: "SI", distance: 1 },
    { nombre: "Marte", Sats: 2, vida: "NO", distance: 1.52 },
    { nombre: "Jupiter", Sats: 79, vida: "NO", distance: 5.20 },
    { nombre: "Saturno", Sats: 82, vida: "NO", distance: 9.58 },
    { nombre: "Urano", Sats: 27, vida: "NO", distance: 19.23 },
    { nombre: "Neptuno", Sats: 14, vida: "NO", distance: 30.1 }
]

// BUTTONS

let busqueda0 = document.getElementById("busqueda0")
let distance0 = document.getElementById("distance0")
let filtro0 = document.getElementById("filtro0")

busqueda0.onclick = () => { openSearch(busqueda0),event.preventDefault() }
// distance0.onclick = () => { choosePlanet(distance), event.preventDefault() }
// filtro0.onclick = () => { choosePlanet(filtro), event.preventDefault() }


// busqueda

function openSearch(nombre){
    let planetNames = []
    let busqueda1 = [nombre]
    planetNames = SolarSystem[nombre];
    var busquedaBD = planetNames.map((nombre => nombre.busqueda1))
    console.log(planetNames);
    console.log(busquedaBD);
    console.log(busqueda1);
    event.preventDefault()
    return
}

// SolarSystem.filter(busqueda0 = nombre);

// SolarSystem.filter(nombre => nombre.distance > userDistance);
    // if (preguntaSats == "si") {
    //     console.log(tieneSats);
    //     let siTieneSats = tieneSats.map(sats => sats.nombre);
    //     console.log(siTieneSats);
    //     alert("Estos planetas tiene satelites" + siTieneSats)
    // } else {
    //     alert("OK")
    //     console.log("OK");
    // }

//ARRAY

//Constantes para funcion constructora


// const SolarSystem1 = new Planets("Mercurio", 0, "NO", 0.39);
// const SolarSystem2 = new Planets("Venus", 0, "NO", 0.72);
// const SolarSystem3 = new Planets("Tierra", 1, "SI", 1);
// const SolarSystem4 = new Planets("Marte", 2, "NO", 1.52);
// const SolarSystem5 = new Planets("Jupiter", 79, "NO", 5.20);
// const SolarSystem6 = new Planets("Saturno", 82, "NO", 9.58);
// const SolarSystem7 = new Planets("Urano", 27, "NO", 19.23);
// const SolarSystem8 = new Planets("Neptuno", 14, "NO", 30.1);

// //ELECCION DE PLANETA

// switch (planetInput) {
//     case "mercurio":
//         SolarSystem1.informar(SolarSystem1)
//         break;
//     case "venus":
//         SolarSystem2.informar(SolarSystem2)
//         break;
//     case "tierra":
//         SolarSystem3.informar(SolarSystem3)
//         break;
//     case "marte":
//         SolarSystem4.informar(SolarSystem4)
//         break;
//     case "jupiter":
//         SolarSystem5.informar(SolarSystem5)
//         break;
//     case "saturno":
//         SolarSystem6.informar(SolarSystem6)
//         break;
//     case "urano":
//         SolarSystem7.informar(SolarSystem7)
//         break;
//     case "neptuno":
//         SolarSystem8.informar(SolarSystem8)
//         break;
//     default:
//         alert("Planeta no existe, ingresalo en la seccion //USER PROMPT// entre las comillas");

// }


// //FILTER

// function FilterDistance(distance){
//     let userDistance = distance / 150
//     userDistance.innerHTML = "<p> " + mapDistance  + "</p>"
//     const orderDistance = SolarSystem.filter(nombre => nombre.distance > userDistance);
//     console.log(orderDistance);
//     const mapDistance = orderDistance.map(distance => distance.nombre);
//     console.log(mapDistance)
//     alert("Los siguientes planetas estan a una distancia mayor a la que ingresaste " + mapDistance)
// }

// function butFilter(){
//     varDistance = document.getElementsByName("inputDistance")
//     FilterDistance(varDistance)
// }

// let botonFilter = document.getElementsByName("inputDistance")
// botonFilter.on


// //BUSQUEDA

// let preguntaSats = prompt("¿Quieres saber que planetas tienen satelites?");
// let tieneSats = SolarSystem.filter((nombre) => nombre.Sats > 0)
// if (preguntaSats == "si") {
//     console.log(tieneSats);
//     let siTieneSats = tieneSats.map(sats => sats.nombre);
//     console.log(siTieneSats);
//     alert("Estos planetas tiene satelites" + siTieneSats)
// } else {
//     alert("OK")
//     console.log("OK");
// }


//BOTONES

// let PlanetButton0 = document.getElementById("factorDrake1")
// PlanetButton0.onclick = () => {showDrake1()} 

// function showDrake1(){
//     console.log("Boton presionado");
//     li = PlanetButton0.innerHTML()
//     alert(li)
//     return
// }