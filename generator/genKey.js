"use strict";


const fs = require ("fs");



function randInt (min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);

    return rand;

}




const list = "ABCDeFGHIJKLMNOPQRSTUVWXYZ". split ("");



const data = [];


for (let i = 0; i < 100000;) {

  let str = "";


  str = str + list [randInt (0, 25)];
  str = str + list [randInt (0, 25)];

  str = str + "-";

  str = str + randInt (1000, 9999);


  if (data. indexOf (str) >= 0) {

    continue;

  }


  data. push (str);


  i++;

}


console. log (data. join ("\n"));
