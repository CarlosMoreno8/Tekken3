

class Fighter {
  constructor(name, hp, armor, dmg, img, img2) {
    this.name = name;
    this.hp = hp;
    this.armor = armor;
    this.dmg = dmg;
    this.img = img;
    this.img2 = img2;
    }
}

let Eddy = new Fighter('Eddy', 100, 10, 15, 'img/eddy.png', 'img/eddyart.png');
let Hwoarang = new Fighter('Hwoarang', 100, 12, 12, 'img/hwoarang.png','img/hwogarangart.png');
let Yoshimitsu = new Fighter('Yoshimitsu', 100, 15, 15, 'img/yoshimitsu.png', 'img/yoshimitsuart.png');
let Xiaoyu = new Fighter('Xiaoyu', 100, 10, 10, 'img/xiaoyu.png', 'img/xiaoyuart.png');

let fighter1 = document.getElementById('fighter1');
let fighter2 = document.getElementById('fighter2');
let fighter3 = document.getElementById('fighter3');
let fighter4 = document.getElementById('fighter4');


let player1 ='';
let player2 ='';

const cambiaPantalla = (valor) => {

    //Ahora se a que pantalla quiero dirigirme al concatenar fase + valor que viene
    //por parámetro.
    let faseSiguiente = "fase" + valor;

    //A continuación creo un array con todas fases.
    let arrayFases = ["fase1","fase2","fase3","fase4","fase5"];

    //Ocultar pantallas menos la que quiero mostrar.

    let pantallasOcultas = arrayFases.filter (fase => {

      if (fase === faseSiguiente) {
        return false;
      
      }else {
        return true;
      }
    });
    
      
    if (valor === 3) {
      document.getElementById('player1img').src = player1.img2;    
      document.getElementById('player2img').src = player2.img2;    
    
    }
    //Primero habilitamos la fase a la que queremos ir

    document.getElementById(faseSiguiente).style.display = "block";

    //Finalmente deshabilitamos el resto

    for(let pantalla of pantallasOcultas){
        document.getElementById(pantalla).style.display = "none";
    }
}

//Aqui empiezo con las funciones de los luchadores


//button none


const pulsarpj = (ev) => {
  let seleccion = ev.target.id;
  console.log("pulsar pj");

  if (player1 === ''){
    player1 = elegirPj (seleccion);
    
  }else {
    player2 = elegirPj (seleccion);
  }

console.log(player1, player2);
}

fighter1.addEventListener('click', pulsarpj);
fighter2.addEventListener('click', pulsarpj);
fighter3.addEventListener('click', pulsarpj);
fighter4.addEventListener('click', pulsarpj);

const elegirPj = (id) => {
  switch (id) {
    case 'fighter1':
      return Eddy; 
    
    case 'fighter2':
      return Hwoarang;

    case 'fighter3':
      return Yoshimitsu;
     
    case 'fighter4':
      return Xiaoyu;  
  
    default:

    'eliges a casper';

      break;

  }
}