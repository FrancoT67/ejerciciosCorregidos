class Conductor {
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.licencia = licencia;
    }
  }
  
  class Colectivo {
    constructor(capacidad) {
      this.capacidad = capacidad;
      this.pasajeros = 0;
      this.conductor = null;
    }
  
    subir(pasajeros) {
      const nuevosPasajeros = Math.min(pasajeros, this.capacidad - this.pasajeros);
      this.pasajeros += nuevosPasajeros;
      console.log(`${pasajeros} pasajeros subieron al colectivo.`);
      console.log(`quedan ${this.pasajeros} pasajeros en el autobus`)
    }
  
    bajar(pasajeros) {
      const pasajerosABajar = Math.min(pasajeros, this.pasajeros);
      this.pasajeros -= pasajerosABajar;
      console.log(`${pasajeros} pasajeros bajaron del colectivo.`);
      console.log(`quedan ${this.pasajeros} pasajeros en el autobus`)
    }
  
    asignarConductor(conductor) {
      this.conductor = conductor;
      console.log(`El conductor ${conductor.nombre} con licencia ${conductor.licencia} fue asignado al colectivo.`);
    }
  }

const colectivo = new Colectivo(40);
const conductor = new Conductor("José", "1234");
colectivo.asignarConductor(conductor);

colectivo.subir(40); 
colectivo.bajar(35); 
