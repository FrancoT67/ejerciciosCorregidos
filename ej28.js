let balancesUltimoSemestre = [
    {mes: "julio", ganancia: 50},
    {mes: "agosto", ganancia: -12},
    {mes: "septiembre", ganancia: 1000},
    {mes: "octubre", ganancia: 300},
    {mes: "noviembre", ganancia: 200},
    {mes: "diciembre", ganancia: 0}
  ];
  
  function balancesPositivos(balances) {
    let positivos = 0;
    for (let i = 0; i < balances.length; i++) {
      if (balances[i].ganancia > 0) {
        positivos++;
      }
    }
    return positivos;
  }
  
  console.log(balancesPositivos(balancesUltimoSemestre));
  