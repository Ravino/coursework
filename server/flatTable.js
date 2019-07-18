"use strict";


function flatTable (table, size) {

  const flatData = [];


  for (let i = 0; i < size; i++) {

    if (!table [i]) {

      continue;

    }


    const flatList = table [i]. getFlatList ();


    for (let j = 0; j < flatList. length; j++) {

      flatData. push (flatList [j]);

    }

  }


  return flatData;

}



module. exports = flatTable;
