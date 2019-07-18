"use strict";


function packTable (table, size) {

  const packData = [];


  for (let i = 0; i < size; i++) {

    if (!table [i]) {

      continue;

    }


    packData. push (table [i]);

  }


  return packData;

}





module. exports = packTable;
