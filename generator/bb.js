"use strict";


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

function randInt (min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);

    return rand;

}

const fs = require ("fs");



//const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ". split ("");



let aviaCompanys = fs. readFileSync ("./aviaCompany.csv", "utf8");
let cantrys = fs. readFileSync ("./cantry.csv", "utf8");
let key = fs. readFileSync ("./unicKey.csv", "utf8");


aviaCompanys = aviaCompanys. split ("\n");
cantrys = cantrys. split ("\n");
key = key. split ("\n");




const data = [];




for (let i = 0; i < 10; i++) {

  console. log (key [i] + "\t==\t" + checkSum (key [i]));

}
