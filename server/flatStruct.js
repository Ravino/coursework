"use strict";




const flatStruct = (value) => {

  const data = [];


  for (let i in value) {

    data [i] = value [i] . struct;

  }


  return data;

};




module. exports = flatStruct;
