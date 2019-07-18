"use strict";


const flatDoublyList = (data) => {

  const flatData = [];


  let currentNode = data. head;


  while (currentNode !== null) {

    flatData. push (currentNode. data);


    currentNode = currentNode. next;

  }


  return flatData;

};




module. exports = flatDoublyList;
