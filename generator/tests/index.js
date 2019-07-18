"use strict";


const fs = require ("fs");
const Hash = require ("./hash.js");




const hash = new Hash ();




const data = fs. readFileSync ("./dataset.csv", "utf-8");


const row = data. split ("\n");
row. pop ();


const rowColumn = [];


for (let i = 0; i < row. length; i++) {

  rowColumn [i] = row [i]. split (",");

}




const badKey = [];

for (let i = 0; i < 10000; i++) {

  badKey [i] = [];

}


for (let i = 0; i < rowColumn. length; i++) {

  const checkSumKey = hash. checkSum (rowColumn [i] [0]);
  let hashKey = "";


  hashKey = hash. hashing (checkSumKey);


  badKey [hashKey]. push (rowColumn [i] [0]);

}




for (let i = 0; i < badKey. length; i++) {

  if (!badKey [i]) continue;


  if (badKey [i]. length == 1) {

    console. log (badKey [i]);

  }

}



//console. log (badKey [151]);
