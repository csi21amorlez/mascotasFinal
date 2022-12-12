export interface Mascota {
  id: number;
  data: {
    nombre: string;
    especie: string;
    raza: string;
    edad: number;
    sexo: string;
    nombrePropietario: string;
  };
}
