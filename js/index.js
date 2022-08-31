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
        console.log("--------------------------------------");
        console.log(this.nombre)
        console.log("");
        console.log("--------------------------------------");
        console.log("Cantidad de Satelites");
        console.log("--------------------------------------");
        console.log(this.sats)
        console.log("");
        console.log("--------------------------------------");
        console.log("Planeta tiene vida?: ");
        console.log("--------------------------------------");
        console.log(this.vida)
        console.log("");
        console.log("--------------------------------------");
        console.log("A que distancia esta del SOL?: ");
        console.log("--------------------------------------");
        console.log("Esta a " + (this.distance * 150) + " Millones de Kilometros del Sol " + "o " + (this.distance) + " Unidades Astronomicas");
        console.log("");

        if ((this.distance * 150) > 200) {
            console.log("--------------------------------------");
            console.log("El planeta esta muy lejos para una visita humana");
            console.log("--------------------------------------");
        } else if ((this.distance * 150) == 150) {
            console.log("--------------------------------------");
            console.log("La distancia es 0, ya que estas aqui");
            console.log("--------------------------------------");
        } else {
            console.log("--------------------------------------");
            console.log("Un viaje tomaria menos de 1 año, podria ser viable")
            console.log("--------------------------------------");
        }
    }
}

//USER PROMPT//

var userPlanetInput = "jupiter";//prompt("Ingresa el planeta del cual quieres información");
var planetInput = userPlanetInput.toLowerCase();

//TEST console.log(planetInput);

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
        console.log("Planeta no existe, ingresalo en la seccion //USER PROMPT// entre las comillas");
        /*alert("Planeta no existe, intente de nuevo");*/
}