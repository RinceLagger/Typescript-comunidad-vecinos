import { Comunidad, Administrador } from "./comunidad";
import { getRandomDatos } from "./auxiliar";

//Modela una comunidad con 15 pisos y 10 plazas de garaje.
//Convoca una junta y haz que todos voten algo aleatorio.Recuenta los votos.

let comunidad = new Comunidad(0, 15, 10);
const { nombre, email, tlf } = getRandomDatos();
let admin = new Administrador(nombre, email, tlf, comunidad);
admin.convocaJunta();
