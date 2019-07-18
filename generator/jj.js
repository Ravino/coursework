"use strict";


function randInt (min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);

    return rand;

}

const fs = require ("fs");



//const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ". split ("");



let aviaCompanys = fs. readFileSync ("./aviaCompany.csv", "utf8");
let cantrys = fs. readFileSync ("./cantry.csv", "utf8");
let key = fs. readFileSync ("./badKey.csv", "utf8");


aviaCompanys = aviaCompanys. split ("\n");
cantrys = cantrys. split ("\n");
key = key. split ("\n");




const data = [];


for (let i = 0; i < 10; i++) {

  const row = [key [i], aviaCompanys [randInt (0, 100)], cantrys [randInt (0, 100)]];


  data. push (row. join (","));

}


console. log (data. join ("\n"));
