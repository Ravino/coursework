"use strict";


const fs = require ("fs");



function randInt (min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);

    return rand;

}




const list = "ABCDeFGHIJKLMNOPQRSTUVWXYZ". split ("");



let aviaCompanys = fs. readFileSync ("./aviaCompany.csv", "utf8");
let cantrys = fs. readFileSync ("./cantry.csv", "utf8");


aviaCompanys = aviaCompanys. split ("\n");
cantrys = cantrys. split ("\n");




const data = [];


for (let i = 0; i < 20; i++) {

  let str = "";

  const row = [];


  const aviaCompany = aviaCompanys [randInt (0, 110)];
  const cantry = cantrys [ randInt (0, 253)];


  str = str + list [randInt (0, 25)];
  str = str + list [randInt (0, 25)];

  str = str + "-";

  str = str + randInt (1000, 9999);


  row. push (str);
  row. push (aviaCompany);
  row. push (cantry);


  data. push (row);


  data [i] = data [i]. join (",");

}



console. log (data. join ("\n"));
