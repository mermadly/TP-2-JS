var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    ventas: [
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro',},
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro', },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] , sucursal: 'Centro', },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] , sucursal: 'Centro', },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: 'Centro',  },

      { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ['Monitor GPRS 3000', 'HDD Toyiva'], sucursal: 'Centro',  },
      { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'], sucursal: 'Caballito',  },
      { fecha: new Date(2019, 1, 01), nombreVendedora: "Ada", componentes:['Motherboard MZI', 'RAM Quinston Fury'], sucursal: 'Centro',  },
      { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ['Monitor ASC 543', 'RAM Quinston'], sucursal: 'Caballito',  },
      { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'], sucursal: 'Centro', },
      { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'], sucursal: 'Caballito', },
      { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ['Motherboard MZI', 'RAM Quinston'], sucursal: 'Centro', },      
      { fecha: new Date(2019, 1, 08), nombreVendedora: "Sheryl", componentes:['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro', },
      { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes:['Monitor GPRS 3000', 'RAM Quinston Fury'], sucursal: 'Centro', },
      { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes:['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Caballito', },
      { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes:['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro', },      
      { fecha: new Date(2019, 1, 05), nombreVendedora: "Ada", componentes:['Motherboard ASUS 1500', 'RAM Quinston'], sucursal: 'Centro', },     
      { fecha: new Date(2019, 1, 01), nombreVendedora: "Grace", componentes:['Motherboard MZI', 'HDD Wezter Dishital'], sucursal: 'Centro', },
      { fecha: new Date(2019, 1, 07), nombreVendedora: "Sheryl", componentes: ['Monitor GPRS 3000', 'RAM Quinston'], sucursal: 'Caballito', }, 
      { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Centro', },
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
  }
  
  var biggest = 0;
  var mejorvendedora = ''

  for (var k = 0; k < vendedorasArray.length; k++) {
    var precioTotal = 0;
    for (var l = 0; l < ventasFiltradas.length; l++) {
      if (vendedorasArray[k].nombre === ventasFiltradas[l].nombreVendedora ) {
        precioTotal = precioMaquina (ventasFiltradas[l].componentes) + precioTotal
        vendedorasArray[k].venta = precioTotal             
      }
    }

    if ( biggest < vendedorasArray[k].venta ) {
      biggest = vendedorasArray[k].venta

      if (biggest === vendedorasArray[k].venta) {
        mejorvendedora = vendedorasArray[k].nombre
      }
    }

    }

  return mejorvendedora
}

console.log('La vendedora que más vendió en el mes de Febrero fue', vendedoraDelMes (2, 2019))

function ventasMes(mes, anio) {
  var ventasFiltradas = [];
 
   for (var i = 0; i < local.ventas.length; i++) {
     if (((local.ventas[i].fecha.getFullYear()) === anio) && ((local.ventas[i].fecha.getMonth() + 1) === mes)) {
          ventasFiltradas.push(local.ventas[i])
       }
     }

  var precioTotalMes = 0;

  for (var j = 0; j < ventasFiltradas.length; j++) {
    precioTotalMes = precioMaquina (ventasFiltradas[j].componentes) + precioTotalMes
  }
  
  return precioTotalMes
    
} 

console.log ('Las ventas totales del mes de Febrero fueron',ventasMes (2, 2019))

function ventasVendedora(nombre) {

  var precioTotalMes = 0;

  for (var i = 0; i < local.ventas.length; i++) {
    if (nombre === local.ventas[i].nombreVendedora) {  
     precioTotalMes = precioMaquina (local.ventas[i].componentes) + precioTotalMes
    }
  }
 return precioTotalMes
 }

console.log ('Las ventas totales de Grace fueron', ventasVendedora ('Grace'));


function huboVentas(mes, anio) {

  var ventas = false;
  for (var i = 0; i < local.ventas.length; i++) {
    if (((local.ventas[i].fecha.getFullYear()) === anio) && ((local.ventas[i].fecha.getMonth() + 1) === mes)) {
      ventas = true
    }
  }
 return ventas
}

console.log ('Hubo ventas?', huboVentas (1, 2019))

function componenteMasVendido() {

  var componentesArray = [];
  var ventas = 0;

  for (var i = 0; i < local.precios.length; i++) {
    componentesArray.push({componente: local.precios[i].componente, ventas: 0,})
    componentesArray[i].ventas = cantidadVentasComponente(local.precios[i].componente)
  }

  var biggest = 0;

  for (var j = 0; j < componentesArray.length; j++) {
    if ( biggest < componentesArray[j].ventas) {
      biggest = componentesArray[j].ventas
  
      if (biggest === componentesArray[j].ventas) {
        return componentesArray[j].componente
      }
    }
  }
}

console.log (componenteMasVendido())

function ventasSucursal(sucursal) {

  var precioTotalMes = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (sucursal === local.ventas[i].sucursal) {  
     precioTotalMes = precioMaquina (local.ventas[i].componentes) + precioTotalMes
    }
  }
 return precioTotalMes
  }


  console.log (ventasSucursal('Grace'))

  // function ventas(parametro, propiedad) {

  //   var precioTotalMes = 0;
  //   for (var i = 0; i < local.ventas.length; i++) {
  //     if (parametro === local.ventas[i][propiedad]) {  
  //      precioTotalMes = precioMaquina (local.ventas[i].componentes) + precioTotalMes
  //     }
  //   }
  //  return precioTotalMes
  //   }

  //   console.log(ventas('Grace', 'nombreVendedora'))
  //   console.log (ventas('Centro', 'sucursal'))
  // 
  //  Este código sirve para ventas sucursal y ventas vendedora
  



function sucursalDelMes(mes, anio) {
    var ventasFiltradas = [];
   
     for (var i = 0; i < local.ventas.length; i++) {
       if (((local.ventas[i].fecha.getFullYear()) === anio) && ((local.ventas[i].fecha.getMonth() + 1) === mes)) {
            ventasFiltradas.push(local.ventas[i])
         }
       }
    
     var sucursales = ['Centro', 'Caballito'] 
     var sucursalesArray = [];
   
     for (var j = 0; j < sucursales.length; j++) {
       sucursalesArray.push({nombre: sucursales[j], venta: 0,})
     }
     
     var biggest = 0;
     var sucursaldelmes = 0;
   
     for (var k = 0; k < sucursales.length; k++) {
       var precioTotal = 0;
       for (var l = 0; l < ventasFiltradas.length; l++) {
         if (sucursalesArray[k].nombre === ventasFiltradas[l].sucursal) {
           precioTotal = precioMaquina (ventasFiltradas[l].componentes) + precioTotal
           sucursalesArray[k].venta = precioTotal   
         }
       }
   
       if ( biggest < sucursalesArray[k].venta ) {
         biggest = sucursalesArray[k].venta
   
         if (biggest === sucursalesArray[k].venta) {
           sucursaldelmes = sucursalesArray[k].nombre
         }
       }
   }
   return sucursaldelmes
}

console.log(sucursalDelMes(2, 2019))

function renderPorMes() {

  var mesesNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var mesesLet = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  for (var i = 0; i < mesesNum.length; i++) {
    document.write ('Total de ventas de ', mesesLet[i], ': ', ventasMes(mesesNum[i], 2019), '<br>')
  }
  
}

renderPorMes()

document.write(' ')

function renderPorSucursal () {

  var sucursales = ['Centro', 'Caballito'] 

  for (var i = 0; i < sucursales.length; i++) {
    document.write ('Total de ventas de ', sucursales[i], ': ', ventasSucursal(sucursales[i]), '<br>')
  }

}

renderPorSucursal();

