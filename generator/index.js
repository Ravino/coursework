"use strict";


const fs = require ("fs");


let data = fs. readFileSync ("./data1.csv", "utf8");


data = data. split ("\n");


for (let i = 0; i < data. length; i++) {

  data [i] = data [i]. split (";");

}




for (let i = 0; i < data. length - 1; i++) {

  console. log (data [i] [1]);

}
