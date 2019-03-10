var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    ventas: [
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
  
    precios: [
      { componente: "Monitor GPRS 3000", precio: 200 },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 }
    ]
  };


  ///precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, 
  //que es la suma de los precios de cada componente incluido.

//  console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del motherboard)

function precioMaquina(componentes) {
  var precio1 = 0;
  var precio2 = 0;
  
  for (var i = 0; i < componentes.length; i++) {
    for (var j = 0; j < local.precios.length; j++) {
      if (componentes[i] === local.precios[j].componente) {
        precio1 = local.precios[j].precio
        precio2 = precio2 + precio1
      }
    
    }
  } 
  return precio2
}


// console.log (precioMaquina (venta4))


for (var k = 0; k < local.ventas.length; k++) {
 console.log(' El precio de la', k + 1, 'venta fue', precioMaquina(local.ventas[k].componentes))
}

function cantidadVentasComponente(componente) {

  var ctdadventas = 0;
  
  for (var i = 0; i < local.ventas.length; i++) {
    for (var j = 0; j < local.ventas[i].componentes.length; j++ ) {
      if (componente === local.ventas[i].componentes[j]) {
        ctdadventas++
      }
    }
  }
  
  return ctdadventas
}



for (var i = 0; i < local.precios.length; i++) {
  
  // cantidadVentasComponente(local.precios[i].componente)
  console.log ('La cantidad de ventas de', local.precios[i].componente, 'fue', cantidadVentasComponente (local.precios[i].componente))
}


function vendedoraDelMes(mes, anio) {
 var ventasFiltradas = [];

  for (var i = 0; i < local.ventas.length; i++) {
    if (((local.ventas[i].fecha.getFullYear()) === anio) && ((local.ventas[i].fecha.getMonth() + 1) === mes)) {
         ventasFiltradas.push(local.ventas[i])
      }
    }

  var vendedorasArray = [];

  for (var j = 0; j < local.vendedoras.length; j++) {
    vendedorasArray.push({nombre: local.vendedoras[j], venta: 0,})
    console.log(vendedorasArray)
  }

  for (var k = 0; k < vendedorasArray.length; k++) {
    for (var l = 0; l < ventasFiltradas.length; l++) {
      if (vendedorasArray[k].nombre === ventasFiltradas[l].nombre ) {
        // precioTotal = precioMaquina (ventasFiltradas[l].ventas) + precioTotal
        // vendedorasArray[k].venta = precioTotal
        console.log (vendedorasArray[l].nombre)
                 
      }
  
    }
    }
//   for (var j = 0; j < local.vendedoras.length; j++) {
//     for (var k = 0; k < ventasFiltradas.length; k++) {
//       if (local.vendedoras[j] === ventasFiltradas[k].nombreVendedora) {
//          var ventasVendedoras = {
//            nombre: local.vendedoras[j],
//            ventas: ventasFiltradas[k].componentes 
//          }

//         ventasVendedorasArray.push(ventasVendedoras)
//       }
//     }
    
//     var precioTotal = 0;

//     for (var l = 0; l < ventasVendedorasArray.length; l++) {
//       if (local.vendedoras [j] === ventasVendedorasArray[l].nombre) {
//        
//       }}

// }

}

vendedoraDelMes (1, 2019)