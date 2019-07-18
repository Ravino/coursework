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



const badKey = [];


for (let i = 0; i < 1000; i++) {

  badKey [i] = [];

}




for (let i of data) {

  const hash = hashing (i);


  badKey [hash]. push (i);

}




for (let i = 0; i < 32; i++) {

  console. log (badKey [0] [i] + "\t==\t" + checkSum (badKey [0] [i]) + "\t==\t" + hashing (badKey [0] [i]));

}
