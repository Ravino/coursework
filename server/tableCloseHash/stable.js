"use strict";


class Hash {

  constructor () {

    this. table = {};
    this. _size = 32;
    this. _oldSize = 32;
    this. coefficient = 0;
    this. items = 0;
    this. conflicts = 0;

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

    if ((size * 2) < 8) {

      return false;

    }


    this. _oldSize = this. _size;
    this. _size = size;


    this. calculateCoefficient ();
//    this. rebuild ();


  return undefined;

  }




  incrementConflicts () {

    this. conflicts = this. conflicts + 1;

  }


  decrementConflicts () {

    this. conflicts = this. conflicts - 1;

  }


  incrementItems () {

    this. items = this. items + 1;


    return undefined;

  }




  decrementItems () {

    this. items = this. items - 1;


    return undefined;

  }




  insertion (object) {

    const hashKey = this. hashing (object. key);


    if (!this. table [hashKey]) {

      this. table [hashKey] = object;


      return true;

    }


    for (let i = hashKey + 1; i !== hashKey; i++) {

      if (i > this. _size) {

        i = 0;


        continue;

      }


      if (this. table [i]) {

        continue;

      }


      this. table [i] = object;


      return true;

    }


    return false;

  }




  add (object) {

    const hashKey = this. hashing (object. key);


    if (!this. table [hashKey]) {

      object. flag = true;


      this. table [hashKey] = object;


      this. incrementItems ();
      this. calculateCoefficient ();
      this. checkPreRebuild ();


      return true;

    }


    if (this. search (object. key)) {

      return false;

    }


    const item = this. search (object. key);


    this. insertion (object);


    this. incrementConflicts ();
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


    if (this. table [hashKey]. key == key) {

      if (!this. table [hashKey]. flag) {

        this. decrementConflicts ();

      }


      delete this. table [hashKey];


      this. decrementItems ();
      this. calculateCoefficient ();
      this. checkPreRebuild ();


      return true;

    }


    if (!this. search (key)) {

      return false;

    }


    for (let i = hashKey + 1; i !== hashKey; i++) {

      if (i > this. _size) {

        i = 0;


        continue;

      }


      if (!this. table [i]) {

        continue;

      }


      if (this. table [i]. key == key) {

        if (!this. table [i]. flag) {

          this. decrementConflicts ();

        }

        delete this. table [i];


        this. decrementItems ();
        this. calculateCoefficient ();
        this. checkPreRebuild ();


        return true;

      }

    }


    return false;

  }




  search (key) {

    const hashKey = this. hashing (key);


    if (!this. table [hashKey]) {

      return false;

    }


    if (this. table [hashKey]. key == key) {

      return this. table [hashKey];

    }


    for (let i = hashKey + 1; i !== hashKey; i++) {

      if (i > this. _size) {

        i = 0;


        continue;

      }


      if (!this. table [i]) {

        continue;

      }


      if (this. table [i]. key == key) {

        return this. table [i];

      }

    }


    return false;

  }




  checkPreRebuild () {

    if (this. coefficient > 50) {

      this. resize (this. _size * 2);
      this. rebuild ();
      this. calculateCoefficient ();


      return true;

    }


    if (this. coefficient <= 25) {

      const dev = Math. round (this. _size / 2);


      if (dev < 8) {

        return false;

      }


      this. resize (dev);
      this. rebuild ();

    }


    return undefined;

  }




  rebuild () {

    const oldSize = this. _oldSize;
    const size = this. _size;
    const oldTable = this. table;

console. log ("rebuild copy table creat new table");

    this. table = [];
    this. items = 0;
    this. conflicts = 0;


console. log ("rebuild  start for building");

    for (let i = 0; i < oldSize; i++) {


console. log ("rebuild for i = " + i);

      if (!oldTable [i]) {

        continue;

      }


      const elem = oldTable [i];


      this. readd (elem);

    }


    this. checkPreRebuild ();


    return undefined;

  }




  readd (object) {

    const hashKey = this. hashing (object. key);


    if (!this. table [hashKey]) {

      this. table [hashKey] = object;


      this. incrementItems ();
      this. calculateCoefficient ();


      return true;

    }


    if (this. search (object. key)) {

      return false;

    }


    this. insertion (object);


    this. incrementConflicts ();
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

  }

}




module. exports = Hash;
