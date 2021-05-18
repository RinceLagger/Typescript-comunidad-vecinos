import { Usuario } from "./interfaces";

const nombres = ["Pablo", "Maria", "Pedro", "Juan"];
const emails = ["Pablo@gmail.com", "Maria@gmail.com", "Pedro@gmail.com", "Juan@gmail.com"];
const tlfs = [696189384, 696189355, 696189334, 696189322];



export const getRandomDatos = (): Usuario => {
  
  let random = Math.floor(Math.random() * 4);
  
  return {
    nombre: nombres[random],
    email: emails[random],
    tlf: tlfs[random]  }

}