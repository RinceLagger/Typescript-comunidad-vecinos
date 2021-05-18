import { Usuario } from "./interfaces";
import { Propiedad } from "./types";
import { getRandomDatos } from "./auxiliar";

export class Comunidad {
  readonly propiedades: Inmueble[] = [];

  constructor(numCasas: number, numPisos: number, numGarajes: number) {
    this.generateCasas(numCasas);
    this.generatePisos(numPisos);
    this.generateGarajes(numGarajes);
  }

  generateCasas(num: number) {
    let randomMetros: number;
    let randomPlantas: number;

    for (let i = 0; i < num; i++) {
      randomMetros = Math.floor(Math.random() * 80);
      randomPlantas = Math.floor(Math.random() * 10);
      const { nombre, email, tlf } = getRandomDatos();
      this.propiedades.push(
        new Inmueble(
          "casa",
          { metros: randomMetros, numPlantas: randomPlantas },
          new Propietario(nombre, email, tlf)
        )
      );
    }
  }

  generatePisos(num: number) {
    let randomMetros: number;

    for (let i = 0; i < num; i++) {
      randomMetros = Math.floor(Math.random() * 80);

      const { nombre, email, tlf } = getRandomDatos();
      this.propiedades.push(
        new Inmueble(
          "piso",
          { metros: randomMetros },
          new Propietario(nombre, email, tlf)
        )
      );
    }
  }

  generateGarajes(num: number) {
    for (let i = 1; i <= num; i++) {
      const { nombre, email, tlf } = getRandomDatos();
      this.propiedades.push(
        new Inmueble(
          "plazaGaraje",
          { numeroPlaza: i },
          new Propietario(nombre, email, tlf)
        )
      );
    }
  }

  convocaJunta() {
    let votosPositivos = 0;
    let votosNegativos = 0;
    this.propiedades.forEach((inmueble) => {
      if (inmueble.getPropietario().vota()) {
        votosPositivos++;
      } else {
        votosNegativos++;
      }
    });
    console.log(
      `votos positivos: ${votosPositivos}, votos negativos: ${votosNegativos}`
    );
  }
}

export class Administrador implements Usuario {
  readonly nombre: string;
  readonly email: string;
  readonly tlf: number;
  readonly comunidad: Comunidad;

  constructor(
    nombre: string,
    email: string,
    tlf: number,
    comunidad: Comunidad
  ) {
    this.nombre = nombre;
    this.email = email;
    this.tlf = tlf;
    this.comunidad = comunidad;
  }

  convocaJunta() {
    this.comunidad.convocaJunta();
  }
}

class Propietario implements Usuario {
  readonly nombre: string;
  readonly email: string;
  readonly tlf: number;

  constructor(nombre: string, email: string, tlf: number) {
    this.nombre = nombre;
    this.email = email;
    this.tlf = tlf;
  }

  vota(): boolean {
    let vote = Math.floor(Math.random() * 2);
    return vote ? true : false;
  }
}

class Inmueble {
  readonly nombre: string;
  readonly tipo: Propiedad;
  readonly propietario: Propietario;

  constructor(nombre: string, tipo: Propiedad, propietario: Propietario) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.propietario = propietario;
  }

  getPropietario(): Propietario {
    return this.propietario;
  }
}
