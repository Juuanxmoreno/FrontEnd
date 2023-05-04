export class Educacion {
    id: number;
    nombreEducacion: string;
    descripcionEducacion: string;

    constructor(nombreEducacion: string, descripcionEducacion: string){
        this.nombreEducacion = nombreEducacion;
        this.descripcionEducacion = descripcionEducacion;
    }
}
