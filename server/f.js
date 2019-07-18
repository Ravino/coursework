"use strict";




const keys = [
  "WP-2032",
  "KH-6924",
  "XQ-4163",
  "XO-2782",
  "HP-2032",
  "DP-7719",
  "NS-7778",
  "ZT-5534",
  "WP-2032",
  "YQ-8233",
];



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


    const dev = 8;


    const hashKey = checkSumKey % dev;


    return hashKey;

  }




for (let i of keys) {

//console. log (i. length);


  const key = checkSum (i);
//  console. log (key);


  console. log (i + "\t==\t" + key + "\t==\t" + hashing (i));

}


let f = "";


/*
f = checkSum ("WP-2032");
console. log (f);


f = hashing ("WP-2032");
console. log (f);
*/
