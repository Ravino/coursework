"use strict";


const DoublyList = require ("./doublyList");




class Hash {

  constructor () {

    this. table = {};
    this. _size = 8;
    this. _oldSize = 8;
    this. coefficient = 0;
    this. items = 0;

  }




  getTable () {

    return this. table;

  }


  getSize () {

    return this. _size;

  }


  getItems () {

    return this. items;

  }


  getCoefficient () {

    return this. coefficient;

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





  resize (size) {

    if ((size * 2) < 8) {

      return false;

    }


    this. _oldSize = this. _size;
    this. _size = size;


    this. calculateCoefficient ();
    this. rebuild ();


  return undefined;

  }




  incrementItems () {

    this. items = this. items + 1;


    return undefined;

  }




  decrementItems () {

    this. items = this. items - 1;


    return undefined;

  }




  add (object) {

    const hashKey = this. hashing (object. key);


    if (!this. table [hashKey]) {

      this. table [hashKey] = new DoublyList ();

    }


    if (this. table [hashKey]. search (object. key)) {

      return false;

    }


    this. table [hashKey]. add (object);


    this. incrementItems ();
    this. calculateCoefficient ();
    this. checkPreRebuild ();


    return true;

  }




  remove (key) {


    const hashKey = this. hashing (key);


    if (!this. table [hashKey]) {

      return false;

    }


    if (!this. table [hashKey]. search (key)) {

      return false;

    }


    if (this. table [hashKey]. len () == 1) {

      delete this. table [hashKey];


      this. decrementItems ();
      this. calculateCoefficient ();
      this. checkPreRebuild ();


      return true;

    }


    this. table [hashKey]. remove (key);


    this. decrementItems ();
    this. calculateCoefficient ();
    this. checkPreRebuild ();


    return true;

  }




  search (key) {

    const hashKey = this. hashing (key);


    if (!this. table [hashKey]) {

      return false;

    }


    const res = this. table [hashKey]. search (key);


    if (!res) {

      return false;

    }


    return res;

  }




  checkPreRebuild () {

    if (this. coefficient > 50) {

      this. resize (this. _size * 2);
      this. rebuild ();
      this. calculateCoefficient ();


      return true;

    }


    return undefined;

  }




  rebuild () {

    const oldSize = this. _oldSize;
    const size = this. _size;
    const oldTable = this. table;


    this. table = [];
    this. items = 0;


    for (let i = 0; i < oldSize; i++) {

      if (!oldTable [i]) {

        continue;

      }


      const flatData = oldTable [i]. getFlatList ();


      for (let j = 0; j < flatData. length; j++) {

        const obj = flatData [j];


        this. readd (obj);

      }
    }


    this. checkPreRebuild ();


    return undefined;

  }




  readd (object) {

    const hashKey = this. hashing (object. key);


    if (!this. table [hashKey]) {

      this. table [hashKey] = new DoublyList ();

    }


    if (this. table [hashKey]. search (object. key)) {

      return false;

    }


    this. table [hashKey]. add (object);


    this. incrementItems ();
    this. calculateCoefficient ();


    return true;

  }




  calculateCoefficient () {

    const res = (this. items * 100) / this. _size;


    this. coefficient = res;


    return undefined;

  }




}



/*
const hash = new Hash ()


//console. log (hash. getSize ());
//console. log (hash. getItems ());
//console. log (hash. getCoefficient ());


let f = hash. add ({ "key": "FF-1234", "avia": "Avrora", "destination": "Moscow"});
console. log (f);
console. log (hash. getSize ());
console. log (hash. getItems ());
console. log (hash. getCoefficient ());




f = hash. add ({ "key": "FF-1235", "avia": "Avrora", "destination": "Moscow"});
console. log (f);
console. log (hash. getSize ());
console. log (hash. getItems ());
console. log (hash. getCoefficient ());




f = hash. add ({ "key": "FF-1236", "avia": "Avrora", "destination": "Moscow"});
console. log (f);
console. log (hash. getSize ());
console. log (hash. getItems ());
console. log (hash. getCoefficient ());




f = hash. add ({ "key": "FF-1237", "avia": "Avrora", "destination": "Moscow"});
console. log (f);
console. log (hash. getSize ());
console. log (hash. getItems ());
console. log (hash. getCoefficient ());



f = hash. add ({ "key": "FF-1238", "avia": "Avrora", "destination": "Moscow"});
console. log (f);
console. log (hash. getSize ());
console. log (hash. getItems ());
console. log (hash. getCoefficient ());


f = hash. remove ("FF-1234");
console. log ("remove " + f);
console. log (hash. getSize ());
console. log (hash. getCoefficient ());



f = hash. remove ("FF-1235");
console. log ("remove " + f);
console. log (hash. getSize ());
console. log (hash. getCoefficient ());






//console. log (hash. getCoefficient ());
//console. log (hash. getItems ());
//hash. resize (4000);
//hash. checkPreRebuild ();
console. log (hash. getCoefficient ());


//hash. resize (2000);
//hash. checkPreRebuild ();
//console. log (hash. getCoefficient ());
console. log (hash. getItems ());




//console. log (hash. getTable ());
*/


module. exports = Hash;
