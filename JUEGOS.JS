// Autor: Edson prudencio
// reto 1 y 2

function juego(pc,usu){
if (pc === usu) {
      console.log("es un empate");
    }
else if((pc === "piedra" && usu === "tijera") ||
        (pc === "papel" && usu === "piedra") ||
        (pc === "tijera" && usu === "papel")){
      
        
      
        console.log("pc gana");
      }
     else{ console.log("usuario gana");
         }
    }
juego("piedra","papel")




function juegos2(PC,USU){
  if (PC === USU) return "Empate";

  switch (PC) {
    case "PIEDRA":
      switch (USU) {
        case "PAPEL":
          return "Ganaste";
        default:
          return "PC gana";
      }
    case "PAPEL":
      switch (USU) {
        case "TIJERA":
          return "Ganaste";
        default:
          return "PC gana";
      }
    case "TIJERA":
      switch (USU) {
        case "PIEDRA":
          return "Ganaste";
        default:
          return "PC gana";
      }
  }
}
// reto 3 

function auto(marca, annio, color){
       	this.marca = marca,
       	this.annio = annio,
            this.color = color
};

var marcaAuto = ['Toyota', 'Tesla', 'Audi', 'Volkswagen'];
var annioAuto = [2017, 2018, 2019, 2020, 2021];
var colorAuto = ['Negro', 'Rojo', 'Plateado', 'Blanco'];
var listaAutos = [];


function generarAutos(cant){
    for (i = 0; i < cant; i++){
        var marca = marcaAuto[Math.floor(Math.random() * marcaAuto.length)];
        var annio = annioAuto[Math.floor(Math.random() * annioAuto.length)];
        var color = colorAuto[Math.floor(Math.random() * colorAuto.length)];
        listaAutos.push(new auto(marca, annio, color));
        //var resultado = `Auto [${i+1}] ${listaAutos}`
        
        console.log(listaAutos[i]);
    }
}

generarAutos(29);
