"use strict";

const Hash = require ("./hash.js");

const hash = new Hash ();




const checkSumKey = hash. checkSum ("XA-7230");
const checkSumKey2 = hash. checkSum ("MO-9724");


console. log (hash. hashingNotEven (checkSumKey));
console. log (hash. hashingNotEven (checkSumKey2));
