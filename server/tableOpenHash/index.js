"use strict";


const DoublyList = require ("./doublyList");




class Hash {

  constructor () {

    this. table = {};
    this. _size = 32;
    this. _oldSize = 32;
    this. coefficient = 0;
    this. items = 0;
    this. conflicts = 0;
    this. lists = 0;

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




  getConflicts () {

    return this. conflicts;

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

    if ((size * 2) <= 32) {

      return false;

    }


    this. _oldSize = this. _size;
    this. _size = size;


//    this. calculateCoefficient ();
//    this. rebuild ();


  return true;

  }




  incrementLists () {

    this. lists = this. lists + 1;

  }


  decrementLists () {

    this. lists = this. lists - 1;

  }


  incrementConflicts () {

    this. conflicts = this. conflicts + 1;


    return undefined;

  }




  decrementConflicts () {

    this. conflicts = this. conflicts - 1;


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


    object. hashKey = hashKey;


    if (!this. table [hashKey]) {

      this. table [hashKey] = new DoublyList ();


      this. incrementLists ();

    }


    if (this. table [hashKey]. search (object. key)) {

      return false;

    }


    if (1 <= this. table [hashKey]. len ()) {

      this. incrementConflicts ();

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


      this. decrementLists ();
      this. decrementConflicts ();
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


    if (this. coefficient < 25) {

      const minSize = Math.round (this. _size / 2);


      if (minSize <=32) {

        return false;

      }


      this. resize (minSize);
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
    this. conflicts = 0;


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


    if (this. table [hashKey]. len () >= 1) {

      this. incrementConflicts ();

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




  reload (db) {

    for (let i in db) {

      this [i] = db [i];

    }

  }




  save () {

    return this;

  }




  globRemove () {

    this. table = {};
    this. _size = 32;
    this. _oldSize = 32;
    this. coefficient = 0;
    this. items = 0;
    this. conflicts = 0;
    this. lists = 0;

  }

}


module. exports = Hash;
