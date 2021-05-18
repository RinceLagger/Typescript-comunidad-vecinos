"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comunidad_1 = require("./comunidad");
const auxiliar_1 = require("./auxiliar");
//Modela una comunidad con 15 pisos y 10 plazas de garaje.
//Convoca una junta y haz que todos voten algo aleatorio.Recuenta los votos.
let comunidad = new comunidad_1.Comunidad(0, 15, 10);
const { nombre, email, tlf } = auxiliar_1.getRandomDatos();
let admin = new comunidad_1.Administrador(nombre, email, tlf, comunidad);
admin.convocaJunta();
//# sourceMappingURL=main.js.map