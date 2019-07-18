"use strict";


function insertList (table, list) {

  for (let i in table) {

    const obj = table [i];


if (!obj) {

    delete table [i];


    continue;

  }


    table [i] = new list ();


    table [i]. reload (obj);

  }


  return table;

}




module. exports = insertList;
