/**
 * @title script
*/

var arr = JSON.parse(localStorage.getItem('name')) || [];

//var bet = document.getElementById('apostar').setAttribute('onclick', 'apostar()')
var rou = document.getElementById('ruleta').setAttribute('onclick', 'roulette()')
//var rou = document.getElementById('ruleta').setAttribute('onclick', 'test()')

var user_name = document.getElementById('name');
var arr = [];
let save = [];

function random() {
  let num_random = Math.floor(Math.random() * 28)
  return num_random;
}

// este array almacena los numeros random
var random_arr = []
var c = 0;

function roulette() {
  c++
  let number_random = random();
  let acierto = false; 
  let random_res = document.getElementById('roule');
  let res_acierto = document.getElementById('acierto');

  random_arr.push(number_random)
  random_res.innerHTML = random_arr.join('<br/>');

  for (let i = 0; i < save.length; i++) {
    if (number_random == save[i]) {
      acierto = true;
      break
    } 
  }

  if (c >= 10) {
    alert("llego a su limite");
    random_res.innerHTML = " ";
    res_acierto.innerHTML = "ACIERTOS";
    return 0;
  } else {
    // detectar si acertaste o no
    if (acierto) {
      console.log("acertaste");
      res_acierto.innerHTML = "ACERTASTE"
    } else {
      console.log("no acertaste");
      res_acierto.innerHTML = "NO ACERTASTE"
    }
  }
  console.log(save, number_random);
}

document.addEventListener('DOMContentLoaded', (event) => {
  let name = localStorage.getItem('name')
  if (name) {
    user_name.innerHTML = arr
  }
})

var contador = 0;

// imprimir los numeros de la tabla al dar click
document.querySelectorAll('.number').forEach(number => {
  number.addEventListener('click', () => {
    contador++
    let res = document.getElementById('res_bet')
    arr.push(number.textContent)
    if (contador >= 11) {
      alert("llego a su limite de apuesta");
    } else {
      res.innerHTML = `Number -> <span>${arr.join('<br/> </span>Number -> </span>')}</span>`
      save.push(number.textContent)
      console.log(number.textContent);
    }
  });
});

/*
var c = 0
let time = setInterval(function () {
  c++
  r = random()
  let rand = [];
  rand.push(r)

  console.log(rand)
  if (rand == 1) {
    console.log("ga");
  }
  if (c >= 10) {
    clearInterval(time)
    console.log("fin")
  }
},200)
*/