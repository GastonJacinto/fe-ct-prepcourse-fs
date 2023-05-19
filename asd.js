// class Persona {
//     constructor(nombre, edad) {
//        this.nombre = nombre;
//        this.edad = edad;
//     }
//     saludar() {
//        console.log(
//           'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
//        );
//     }
//  }
//  let martin = new Persona('Martin', 26);
//  martin.saludar();



// class Programador extends Persona {
//     constructor(nombre, edad, añosDeExperiencia) {
//        super(nombre, edad);
//        this.añosDeExperiencia = añosDeExperiencia;
//     }
//     codear() {
//        console.log(
//           'Soy ' +
//              this.nombre +
//              ' . Codeo desde hace  ' +
//              this.añosDeExperiencia +
//              ' años'
//        );
//     }
//  }
 
//  let martin = new Persona('Martín', 26);
//  let programador = new Programador('María', 37, 4);
//  martin.saludar();
//  programador.codear();

// class Persona {
//     constructor (nombre,edad,nacionalidad,altura){
//         this.nombre=nombre;
//         this.edad = edad;
//         this.nacionalidad = nacionalidad;
//         this.altura= altura;
//     }
//     gritar() {
//         console.log("¡HOLA, ME LLAMO " + this.nombre+", tengo "+ this.edad+" años, soy " +this.nacionalidad + " y mido " +this.altura +" de alto!")
//    } 
// }

// const gaston = new Persona('Gaston',23, 'argentino', 1.75);

// gaston.gritar();

// class Gamer extends Persona{
//     constructor(nombre,edad,nacionalidad,altura,gamer) {
//         super(nombre,edad,nacionalidad,altura)
//         this.gamer = gamer;
//     }
//     esGamer() {       
//         if (this.gamer == true) console.log(" Soy "+this.nombre + " y soy gamer :)");
//         else console.log("No soy gamer :(");
//     }
// }

// const jose = new Persona('Jose', 25, 'argentino', 1.8)
// const gamer = new Gamer ('Jose', 25, 'argentino', 1.8, false);
// jose.gritar();
// gamer.esGamer();
// console.log("----------------------------------------");
// const gaston = new Persona("gaston", 27,"mexicano", 1.9, true);
// const gamer1 =  new Gamer ("gaston", 27,"mexicano", 1.9, true);
// gaston.gritar();
// gamer1.esGamer();

// console.log("----------------------------------------");

// Gamer.prototype.juego = function(juegos) {
//     console.log("Me gusta jugar a " + juegos + " jeje.")
// }

// gamer1.esGamer();
// gamer1.juego("Lol");

/*---------------------------------------------------------------*/

// var string;


//    String.prototype.reverse() = function (string) {

//       let stringInvertida = string.split("");

//       let invertirArreglo = stringInvertida.reverse();

//       let unirArreglo = invertirArreglo.join("");

//       return  console.log(unirArreglo);
//    }

// var pincha = "String";
// pincha.reverse();