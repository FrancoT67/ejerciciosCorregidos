const ecommerce = [
    {nombre: "SamsungTV", precio: 6000, articulos: 10},
    {nombre: "DELLnotbook", precio: 4000, articulos: 30},
    {nombre: "AuricularesSony", precio: 1500, articulos: 15},
    {nombre: "MonitorPhilips", precio: 12000, articulos: 20},
    {nombre: "Tecladologitech", precio: 3000, articulos: 5}
  ];
  
  function totalDeArticulos(ecommerce) {
    const secciones = {};
    for (let i = 0; i < ecommerce.length; i++) {
      const e = ecommerce[i];
      if (secciones[e.nombre] === undefined) {
        secciones[e.nombre] = 0;
      }
    secciones[e.nombre] += e.precio;
    }
    return secciones;   
        
  }
  
  console.log(totalDeArticulos(ecommerce));
  