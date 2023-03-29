import Persona from "./InterfasePersona";

export default abstract class Socio implements Persona{
    
    nombre: string;
    apellido: string;    
    fechaDeNacimiento: string;
    dni: number;
    telefono: number;
    miembroDesde: string;

    constructor(nombre:string, apellido:string, fechaDeNacimiento:string, dni:number, telefono:number, 
        miembroDesde: string ){
            this.nombre = nombre;
            this.apellido = apellido;
            this.fechaDeNacimiento = new Date (fechaDeNacimiento).toLocaleDateString();
            this.dni = dni;
            this.telefono = telefono;
            this.miembroDesde = new Date(miembroDesde).toLocaleDateString();
        }
}