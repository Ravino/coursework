"use strict";


const fs = require ("fs");
const app = require ("express") ();

const cookieParser = require ("cookie-parser");
const bodyParser = require ("body-parser");

const sendDataStream = require ("./sendDataStream.js");
const openHash = require ("./tableOpenHash");
const closeHash = require ("./tableCloseHash");
const workInputData = require ("./workInputData");
const flatDoublyList = require ("./flatDoublyList");
const flatStruct = require ("./flatStruct");




const dataStream = fs. ReadStream ("./dataset.csv", "utf8");
const dataFile = fs. readFileSync ("./dataset.csv", "utf8");




app. use (cookieParser ());
app. use (bodyParser. json ());
app. use (bodyParser. urlencoded ({ "extended": true, }));



app. get ("/api/test", (req, res) => {

  res. send ("fuc");
});




app. get ("/api/data", (req, res) => {

  res. send (dataFile);


  return undefined;

});


app. get ("/api/openHash/table", (req, res) => {

  const data = openHash. getData ();


  if (Object. keys (data). length == 0) {

    const result = Object. values (data);


    res. send (result);


    return undefined;

  }


let result = [];


  for (let i in data) {

    result [i] = flatDoublyList (data [i]);

  }


result = Object. values (result);
console. log (result);


  res. send (result);


  return undefined;

});


app. get ("/api/closeHash/table", (req, res) => {

  const data = closeHash. getData ();


  if (data. length == 0) {

    const result = Object. values (data);


    res. send (result);


    return undefined;

  }


  const middle = Object. values (data);


  const result = flatStruct (middle);


  res. send (result);


  return undefined;

});


app. post ("/api/openHash/add", (req, res) => {


  const key = workInputData (req. body. key);
  const nameAviaCompany = workInputData (req. body. nameAviaCompany);
  const destination = workInputData (req. body. destination);


  const value = {
    "key": key,
    "nameAviaCompany": nameAviaCompany,
    "destination": destination,
  };


  const result = openHash. add (key, value);


  res. send (result);


  return undefined;

});


app. post ("/api/closeHash/add", (req, res) => {

  const key = workInputData (req. body. key);
  const nameAviaCompany = workInputData (req. body. nameAviaCompany);
  const destination = workInputData (req. body. destination);


  const value = {
    "key": key,
    "nameAviaCompany": nameAviaCompany,
    "destination": destination,
  };


  const result = closeHash. add (key, value);


  res. send (result);


  return undefined;

});


app. post ("/api/openHash/search", (req, res) => {

  const key = workInputData (req. body. key);


  const data = openHash. search (key);


  if (typeof data !== "object") {

    res. send (data);


    return undefined;

  }


  let result = [];


  for (let i in data) {

    result [i] = flatDoublyList (data [i]);

  }


  result = Object. values (result);


  res. send (result);


  return undefined;

});


app. post ("/api/closeHash/search", (req, res) => {

  const key = workInputData (req. body. key);


  const data = closeHash. search (key);


  console. log (typeof data);


  if (typeof data !== "object") {

    const result = Object. values (data);


    res. send (result);


    return undefined;

  }


  const middle = Object. values (data);
  console. log (middle);


  const result = flatStruct (middle);
  console. log (result);


  res. send (result);


  return undefined;

});


app. post ("/api/openHash/remove", (req, res) => {

  const key = workInputData (req. body. key);


  const result = openHash. remove (key);


  res. send (result);


  return undefined;

});


app. get ("/api/closeHash/remove", (req, res) => {

  const key = workInputData (req. body. key);


  const result = closeHash. remove (key);


  res. send (result);


  return undefined;

});



app. listen (3000);
