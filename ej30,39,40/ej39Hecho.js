class Ficha {
    constructor(nombre) {
      this.nombre = nombre;
      this.sesiones = [];
      this.numsesiones = 0;
    }
  
    anotar(km) {
      this.sesiones.push(km);
      this.numsesiones++;
    }
  
    media() {
      if (this.numsesiones === 0) {
        return 0;
      } else {
        const totalKm = this.sesiones.reduce((total, km) => total + km);

        // se hace una reescritura de los decimales a un flotante con una precision de 3 decimales.

        return ('las cantidad de sesiones fueron: '+Number.parseFloat(totalKm / this.numsesiones).toFixed(1));
      }
    }
  }
  
const ficha = new Ficha("Juan");
ficha.anotar(8);
ficha.anotar(10);
ficha.anotar(6);
console.log(ficha.media()); 