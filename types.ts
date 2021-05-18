export type Piso = { metros: number };
export type Garaje = { numeroPlaza: number };
export type Casa = {
  metros: number,
  numPlantas: number
};

export type Propiedad = Piso | Garaje | Casa;

