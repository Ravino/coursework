"use strict";

class V {

  constructor () {

    this. fuck = "fuck";
    this. reload = "";

  }


  fff () {}
  get () {
    return this;
  }

}


const dbJ = require ("node-json-db"). JsonDB;

const db = new dbJ ("./hashTables", true, true);


let f = {

  "func": function () {
    return "fuck";
  }
};

//f = JSON. stringify (f);
//f = JSON. parse (f);
//console. log (f);




const fs = require ("fs");

fs. writeFileSync ("test.fff", f);
