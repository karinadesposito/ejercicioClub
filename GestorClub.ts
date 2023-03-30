const fs = require ('fs')
const readlineSync = require ('readline-sync')


import { Deportes, Player } from "./Player";

export default class GestorClub{
    constructor(){
        fs.writeFileSync('./socios.json','[]')
    }

       data() {return JSON.parse(fs.readFileSync('./socios.json'))}

agregarSocio(){
    const nombre = readlineSync.question('Escriba su nombre: ');
    const apellido = readlineSync.question('Escriba su apellido: ');
    const fechaDeNacimiento= readlineSync.question('Escriba su fecha de nacimiento: yyyy/mm/dd ');
    const dni = readlineSync.question('Escriba su DNI: ');
    const telefono = readlineSync.question('Escriba su telefono: ');
    const miembroDesde = readlineSync.question('Fecha de alta de socio: yyyy/mm/dd ');
    const arrayDeportes = ["futbol", "tenis", "hockey", "basquet", "natacion"]
    const deporte = readlineSync.keyInSelect(arrayDeportes, 'Seleccione deporte: ');

    let nuevoSocio = new Player(deporte, nombre, apellido, fechaDeNacimiento, dni, telefono, miembroDesde)
    let socios = [...this.data(), nuevoSocio]
   

    fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 2));

}
   buscarPorNombre(nombre:string){
    let nombreSocio = this.data().find((socio: { nombre: string; })=>socio.nombre===nombre)
    console.log(nombreSocio);
    return nombreSocio; 
   }
   buscarPorDNI(dni:number): number{
    let numeroDni :number =this.data().find((socio: {dni:number; })=>socio.dni===dni);
    console.log(dni);    
    return dni; 
   }
   buscarPorApellido(apellido:string): string{
    let apellidoSocio = this.data().find((socio: { apellido: string; })=>socio.apellido===apellido)
    console.log(apellidoSocio);
    return apellidoSocio; 
   }
   buscarPorDeporte(deporte: Deportes){
    let deporteSocio = this.data().find((socio: { deporte: Deportes; })=>socio.deporte===deporte);
    console.log(deporteSocio);
    return deporteSocio; 
   }


}