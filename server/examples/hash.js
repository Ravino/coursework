"use strict";


class Hash {

  constructor () {

    this. _size = 2000;

  }


  hashing (key) {

    const checkSumKey = this. checkSum (key);


    const dev = this. _size;


    const hashKey = checkSumKey % dev;


    return hashKey;

  }


  checkSum (strKey) {

    const strArray = strKey. split ("");


    const numberArray = [];


    for (let i = 0; i < strArray. length; i++) {

      numberArray [i] = strArray [i]. charCodeAt (0);

    }


    const numberKey = numberArray. join ("");


    return numberKey;

  }

}



const hash = new Hash ();


console. log (hash. hashing ("1313"));
