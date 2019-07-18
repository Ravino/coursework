"use strict";


const fs = require ("fs");


let data = fs. readFileSync ("./unicKey.csv", "utf-8");


data = data. split ("\n");
data. pop ();

function   checkSum (strKey) {

    const strArray = strKey. split ("");


    let numberKey = 0;


    for (let i = 0; i < strArray. length; i++) {

      numberKey = numberKey + strArray [i]. charCodeAt (0);

    }


    return String (numberKey);

  }




function   hashing (key) {

    const checkSumKey = checkSum (key);


    const dev = 32;


    const hashKey = checkSumKey % dev;


    return hashKey;

  }



const goodKey = [];


for (let i of data) {


  const hash = hashing (i);


  goodKey [hash] = i;

}


for (let i in goodKey) {

//  console. log (goodKey [i] + "\t==\t" + checkSum (goodKey [i]) + "\t==\t" + hashing (goodKey [i]));
console. log (goodKey [i]);

}
