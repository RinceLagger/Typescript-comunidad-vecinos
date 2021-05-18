"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = exports.Comunidad = void 0;
const auxiliar_1 = require("./auxiliar");
class Comunidad {
    constructor(numCasas, numPisos, numGarajes) {
        this.propiedades = [];
        this.generateCasas(numCasas);
        this.generatePisos(numPisos);
        this.generateGarajes(numGarajes);
    }
    generateCasas(num) {
        let randomMetros;
        let randomPlantas;
        for (let i = 0; i < num; i++) {
            randomMetros = Math.floor(Math.random() * 80);
            randomPlantas = Math.floor(Math.random() * 10);
            const { nombre, email, tlf } = auxiliar_1.getRandomDatos();
            this.propiedades.push(new Inmueble("casa", { metros: randomMetros, numPlantas: randomPlantas }, new Propietario(nombre, email, tlf)));
        }
    }
    generatePisos(num) {
        let randomMetros;
        for (let i = 0; i < num; i++) {
            randomMetros = Math.floor(Math.random() * 80);
            const { nombre, email, tlf } = auxiliar_1.getRandomDatos();
            this.propiedades.push(new Inmueble("piso", { metros: randomMetros }, new Propietario(nombre, email, tlf)));
        }
    }
    generateGarajes(num) {
        for (let i = 1; i <= num; i++) {
            const { nombre, email, tlf } = auxiliar_1.getRandomDatos();
            this.propiedades.push(new Inmueble("plazaGaraje", { numeroPlaza: i }, new Propietario(nombre, email, tlf)));
        }
    }
    convocaJunta() {
        let votosPositivos = 0;
        let votosNegativos = 0;
        this.propiedades.forEach((inmueble) => {
            if (inmueble.getPropietario().vota()) {
                votosPositivos++;
            }
            else {
                votosNegativos++;
            }
        });
        console.log(`votos positivos: ${votosPositivos}, votos negativos: ${votosNegativos}`);
    }
}
exports.Comunidad = Comunidad;
class Administrador {
    constructor(nombre, email, tlf, comunidad) {
        this.nombre = nombre;
        this.email = email;
        this.tlf = tlf;
        this.comunidad = comunidad;
    }
    convocaJunta() {
        this.comunidad.convocaJunta();
    }
}
exports.Administrador = Administrador;
class Propietario {
    constructor(nombre, email, tlf) {
        this.nombre = nombre;
        this.email = email;
        this.tlf = tlf;
    }
    vota() {
        let vote = Math.floor(Math.random() * 2);
        return vote ? true : false;
    }
}
class Inmueble {
    constructor(nombre, tipo, propietario) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.propietario = propietario;
    }
    getPropietario() {
        return this.propietario;
    }
}
//# sourceMappingURL=comunidad.js.map