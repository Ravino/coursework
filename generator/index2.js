"use strict";


const fs = require ("fs");


let data = fs. readFileSync ("./cantry.csv", "utf8");



data = data. split ("\n");



for (let i = 0; i < data. length; i++) {

  data [i] = data [i]. split ("\t");

}


for (let i = 0; i < data. length; i++) {
  console. log (data [i] [0]);
}
