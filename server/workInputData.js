"use strict";


const hsc = require ("htmlspecialchars");
const trim = require ("trim");




const workInputData = (data) => {

  const workHscData = hsc (data);
  const workTrimData = trim (workHscData);


  return workTrimData;

};




module. exports = workInputData;
