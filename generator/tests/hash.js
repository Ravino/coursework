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


    let numberKey = 0;


    for (let i = 0; i < strArray. length; i++) {

      numberKey = numberKey + strArray [i]. charCodeAt (0);

    }


    return String (numberKey);

  }

}



module. exports = Hash;
