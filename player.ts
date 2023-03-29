export enum Deportes{
    futbol, tenis, hockey, basquet, natacion, 
}

import Socio from "./AbstractSocio";

export class Player extends Socio{
    deporte: Deportes;

    constructor(deporte: Deportes, nombre:string, apellido:string, 
        fechaDeNacimiento: string, dni:number, telefono:number, miembroDesde: string){
        super(nombre,apellido,fechaDeNacimiento,dni,telefono,miembroDesde)
        this.deporte = deporte;
        }
    }

