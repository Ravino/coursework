"use strict";


const fs = require ("fs");


let data = fs. readFileSync ("./unicKey.csv", "utf-8");


data = data. split ("\n");
data. pop ();

console. log (data. indexOf ("ZA-7099"));
