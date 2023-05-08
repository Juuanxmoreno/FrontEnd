export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    acercaDe: string;
    img: string;

    constructor(nombre: string, apellido: string, acercaDe: string, img: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
        this.img = img;
    }
}
