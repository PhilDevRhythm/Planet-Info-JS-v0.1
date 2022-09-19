// class Planets {
//     constructor(nombre, sats, vida, distance) {
//         this.nombre = nombre;
//         this.sats = sats;
//         this.vida = vida;
//         this.distance = distance;
//     }
//     // FUNCION INFORMAR()
//     informar() {
//         console.log("Planeta: ")
//         console.log(this.nombre)
//         // alert("Elegiste el planeta: " + this.nombre)
        

//         console.log("Cantidad de Satelites");
//         // alert("Cantidad de Satelites: " + this.sats)

//         console.log(this.sats)
    
//         console.log("Planeta tiene vida?: ");
//         // alert("Planeta tiene vida?: " + this.vida)

//         console.log(this.vida)
    
//         console.log("A que distancia esta del SOL?: ");
//     }
//     humanDistance(){

//         console.log("Esta a " + (this.distance * 150) + " Millones de Kilometros del Sol " + "o " + (this.distance) + " Unidades Astronomicas");
//         // alert("A que distancia esta del SOL?: " + "Esta a " + (this.distance * 150) + " Millones de Kilometros del Sol " + "o " + (this.distance) + " Unidades Astronomicas")
//     }
//     humanVisit(){
//         if ((this.distance * 150) > 200) {

//             console.log("El planeta esta muy lejos para una visita humana");
//             // alert("El planeta esta muy lejos para una visita humana")

//         } else if ((this.distance * 150) == 150) {

//             console.log("En este caso no es valido un viaje interestelar");
//             // alert("En este caso no es valido un viaje interestelar");

//         } else {

//             console.log("Un viaje tomaria menos de 1 año, podria ser viable")
//             // alert("Un viaje tomaria menos de 1 año, podria ser viable")
//         }
//     }
// }

// //USER PROMPT//

// var userPlanetInput = "venus"//prompt("Ingresa el planeta del cual quieres información");
// var planetInput = userPlanetInput.toLowerCase();

// //Constantes para funcion constructora

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
//         // alert("Planeta no existe, ingresalo en la seccion //USER PROMPT// entre las comillas");
// }

// //AUXILIAR FILTER

// const SolarSystem = [
//     {nombre : "Mercurio", Sats : 0, vida : "NO", distance : 0.39},
//     {nombre : "Venus", Sats : 0, vida : "NO", distance : 0.72},
//     {nombre : "Tierra", Sats : 1, vida : "SI", distance : 1},
//     {nombre : "Marte", Sats : 2, vida : "NO", distance : 1.52},
//     {nombre : "Jupiter", Sats : 79, vida : "NO", distance : 5.20},
//     {nombre : "Saturno",Sats : 82, vida : "NO", distance : 9.58},
//     {nombre : "Urano", Sats : 27, vida : "NO", distance : 19.23},
//     {nombre : "Neptuno", Sats : 14, vida : "NO", distance : 30.1}
// ]

// let userDistance = 500 / 150 /*prompt("Ingresa la distancia desde el sol que deseas filtrar")*/
// console.log(SolarSystem);
// const orderDistance = SolarSystem.filter(nombre => nombre.distance > userDistance);
// console.log(orderDistance);
// const mapDistance = orderDistance.map(distance => distance.nombre);
// console.log(mapDistance)
// // alert("Los siguientes planetas estan a una distancia mayor a la que ingresaste" + mapDistance)

// //BUSQUEDA

// let preguntaSats = prompt("¿Quieres saber que planetas tienen satelites?");
// let tieneSats = SolarSystem.filter((nombre) => nombre.Sats > 0)
// if (preguntaSats == "si"){
//     console.log(tieneSats);
//     let siTieneSats = tieneSats.map(sats => sats.nombre);
//     console.log(siTieneSats);
//     alert(siTieneSats)
// }else{
//         // alert("OK")
//         console.log("OK");
//     }



function showPlanetInfo (planet){
    let tempInfo = [] 
    tempInfo = SolarSystem[planet]
    let planetName = tempInfo.nombre
    let planetSats = tempInfo.Sats 
    let planetLife = tempInfo.vida
    let planetDistance = tempInfo.distance
    console.log(tempInfo);
    console.log(planetName);
    console.log(planetSats);
    console.log(planetDistance);
    console.log(planetLife);
    return
}
const SolarSystem = [
    { id: "SS1", nombre: "Mercurio", Sats: 0, vida: "NO", distance: 0.39 },
    { id: "SS2", nombre: "Venus", Sats: 0, vida: "NO", distance: 0.72 },
    { id: "SS3", nombre: "Tierra", Sats: 1, vida: "SI", distance: 1 },
    { id: "SS4", nombre: "Marte", Sats: 2, vida: "NO", distance: 1.52 },
    { id: "SS5", nombre: "Jupiter", Sats: 79, vida: "NO", distance: 5.20 },
    { id: "SS6", nombre: "Saturno", Sats: 82, vida: "NO", distance: 9.58 },
    { id: "SS7", nombre: "Urano", Sats: 27, vida: "NO", distance: 19.23 },
    { id: "SS8", nombre: "Neptuno", Sats: 14, vida: "NO", distance: 30.1 }
]



//ELECCION DE PLANETA

let planetInput = "mercurio"

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
        alert("Elije planeta de nuevo");

}