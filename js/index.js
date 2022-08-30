class Planets {
    constructor(nombre, sats, vida) {
        this.nombre = nombre;
        this.sats = sats;
        this.vida = vida;
    }

    informar() {
        console.log("Planeta: ")
        console.log(this.nombre)
        console.log("Cantidad de Satelites");
        console.log(this.sats)
        console.log("Planeta tiene vida?: ");
        console.log(this.vida)
        /*alert(`            Planeta "${this.nombre}" 
            Cantidad de Satelites "${this.sats}"
            Planeta tiene vida? "${this.vida}"`);*/
    }
}

planetInput = "jupiter";//prompt("Ingresa el planeta del cual quieres información");

const SolarSystem1 = new Planets("Mercurio", 0, "NO");
const SolarSystem2 = new Planets("Venus", 0, "NO");
const SolarSystem3 = new Planets("Tierra", 1, "SI");
const SolarSystem4 = new Planets("Marte", 2, "NO");
const SolarSystem5 = new Planets("Jupiter", 64, "NO");
const SolarSystem6 = new Planets("Saturno", 56, "NO");
const SolarSystem7 = new Planets("Urano", 9, "NO");
const SolarSystem8 = new Planets("Neptuno", 13, "NO");

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
        console.log("Planeta no existe, intente de nuevo");
        /*alert("Planeta no existe, intente de nuevo");*/
        break;
}




