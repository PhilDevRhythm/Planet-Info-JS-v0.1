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
        console.log("Planeta: ")
        console.log(this.nombre)
        alert("Elegiste el planeta: " + this.nombre)


        console.log("Cantidad de Satelites");
        alert("Cantidad de Satelites: " + this.sats)

        console.log(this.sats)

        console.log("Planeta tiene vida?: ");
        alert("Planeta tiene vida?: " + this.vida)

        console.log(this.vida)

        console.log("A que distancia esta del SOL?: ");

        console.log("Esta a " + (this.distance * 150) + " Millones de Kilometros del Sol " + "o " + (this.distance) + " Unidades Astronomicas");
        alert("A que distancia esta del SOL?: " + "Esta a " + (this.distance * 150) + " Millones de Kilometros del Sol " + "o " + (this.distance) + " Unidades Astronomicas")

        if ((this.distance * 150) > 200) {

            console.log("El planeta esta muy lejos para una visita humana");
            alert("El planeta esta muy lejos para una visita humana")

        } else if ((this.distance * 150) == 150) {

            console.log("En este caso no es valido un viaje interestelar");
            alert("En este caso no es valido un viaje interestelar");

        } else {

            console.log("Un viaje tomaria menos de 1 año, podria ser viable")
            alert("Un viaje tomaria menos de 1 año, podria ser viable")
        }
    }
}

//USER PROMPT//

var userPlanetInput = prompt("Ingresa el planeta del cual quieres información");
var userPlanetInput
var planetInput = userPlanetInput.toLowerCase();


let busqueda0 = document.getElementById("busqueda0")
let distance0 = document.getElementById("distance0")
let filtro0 = document.getElementById("filtro0")

busqueda0.onclick = () => {openSearch(),event.preventDefault() }
distance0.onclick = () => { choosePlanet('venus'), event.preventDefault() }
filtro0.onclick = () => { choosePlanet('tierra'), event.preventDefault() }

function opensearch(){
    var busquedaBD = SolarSystem.filter([busqueda0])
      
    if (preguntaSats == "si") {
        console.log(tieneSats);
        let siTieneSats = tieneSats.map(sats => sats.nombre);
        console.log(siTieneSats);
        alert("Estos planetas tiene satelites" + siTieneSats)
    } else {
        alert("OK")
        console.log("OK");
    }

//ARRAY

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





//Constantes para funcion constructora


const SolarSystem1 = new Planets("Mercurio", 0, "NO", 0.39);
const SolarSystem2 = new Planets("Venus", 0, "NO", 0.72);
const SolarSystem3 = new Planets("Tierra", 1, "SI", 1);
const SolarSystem4 = new Planets("Marte", 2, "NO", 1.52);
const SolarSystem5 = new Planets("Jupiter", 79, "NO", 5.20);
const SolarSystem6 = new Planets("Saturno", 82, "NO", 9.58);
const SolarSystem7 = new Planets("Urano", 27, "NO", 19.23);
const SolarSystem8 = new Planets("Neptuno", 14, "NO", 30.1);

//ELECCION DE PLANETA

switch (planetInput) {
    case "mercurio":
        SolarSystem1.informar(SolarSystem1)
        break;
    case "venus":
        SolarSystem2.informar(SolarSystem2)
        break;
    case "tierra":
        SolarSystem3.informar(SolarSystem3)
        break;
    case "marte":
        SolarSystem4.informar(SolarSystem4)
        break;
    case "jupiter":
        SolarSystem5.informar(SolarSystem5)
        break;
    case "saturno":
        SolarSystem6.informar(SolarSystem6)
        break;
    case "urano":
        SolarSystem7.informar(SolarSystem7)
        break;
    case "neptuno":
        SolarSystem8.informar(SolarSystem8)
        break;
    default:
        alert("Planeta no existe, ingresalo en la seccion //USER PROMPT// entre las comillas");

}


//FILTER

function FilterDistance(distance){
    let userDistance = distance / 150
    userDistance.innerHTML = "<p> " + mapDistance  + "</p>"
    const orderDistance = SolarSystem.filter(nombre => nombre.distance > userDistance);
    console.log(orderDistance);
    const mapDistance = orderDistance.map(distance => distance.nombre);
    console.log(mapDistance)
    alert("Los siguientes planetas estan a una distancia mayor a la que ingresaste " + mapDistance)
}

function butFilter(){
    varDistance = document.getElementsByName("inputDistance")
    FilterDistance(varDistance)
}

let botonFilter = document.getElementsByName("inputDistance")
botonFilter.on


//BUSQUEDA

let preguntaSats = prompt("¿Quieres saber que planetas tienen satelites?");
let tieneSats = SolarSystem.filter((nombre) => nombre.Sats > 0)
if (preguntaSats == "si") {
    console.log(tieneSats);
    let siTieneSats = tieneSats.map(sats => sats.nombre);
    console.log(siTieneSats);
    alert("Estos planetas tiene satelites" + siTieneSats)
} else {
    alert("OK")
    console.log("OK");
}


//BOTONES

let PlanetButton0 = document.getElementById("factorDrake1")
PlanetButton0.onclick = () => {showDrake1()} 

function showDrake1(){
    console.log("Boton presionado");
    li = PlanetButton0.innerHTML()
    alert(li)
    return
}}