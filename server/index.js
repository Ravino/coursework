"use strict";


const circularJson = require ("circular-json");
const JsonDb = require ("node-json-db"). JsonDB;
const fs = require ("fs");
const app = require ("express") ();

const cookieParser = require ("cookie-parser");
const bodyParser = require ("body-parser");

const sendDataStream = require ("./sendDataStream.js");
const OpenHash = require ("./tableOpenHash");
const CloseHash = require ("./tableCloseHash");
const workInputData = require ("./workInputData");
const flatDoublyList = require ("./flatDoublyList");
const flatStruct = require ("./flatStruct");
const flatTable = require ("./flatTable");
const packTable = require ("./packTable");
const DoublyList = require ("./doublyList");
const insertList = require ("./insertList");


const openHash = new OpenHash ();
const closeHash = new CloseHash ();


const jsonDb = new JsonDb ("./db/hashTables", true, true);




const dataStream = fs. ReadStream ("./dataset.csv", "utf8");
const dataFile = fs. readFileSync ("./dataset.csv", "utf8");





const dbOpenHash = circularJson. parse (jsonDb. getData ("/openHash"));
const dbCloseHash = circularJson. parse (jsonDb. getData ("/closeHash"));



dbOpenHash. table = insertList (dbOpenHash. table, DoublyList);


openHash. reload (dbOpenHash);
closeHash. reload (dbCloseHash);

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

  const table = openHash. getTable ();
  const size = openHash. getSize ();


  const result = flatTable (table, size);


  res. send (result);

});


app. get ("/api/closeHash/table", (req, res) => {

  const table = closeHash. getTable ();
  const size = closeHash. getSize ();


  const result = packTable (table, size);


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


  const result = openHash. add (value);


  console. log (result);


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


  const result = closeHash. add (value);


  console. log (result);


  res. send (result);


  return undefined;

});




app. post ("/api/openHash/search", (req, res) => {

  const key = workInputData (req. body. key);


  const data = [];


  const elem = openHash. search (key);


  if (elem == false) {

    res. send (elem);


    return undefined;

  }


  data. push (elem);


  res. send (data);


  return undefined;

});


app. post ("/api/closeHash/search", (req, res) => {

  const key = workInputData (req. body. key);


  const data = [];


  const elem = closeHash. search (key);


  if (elem == false) {

    res. send (elem);


    return undefined;

  }


  data. push (elem);


  res. send (data);


  return undefined;

});




app. post ("/api/openHash/remove", (req, res) => {

  const key = workInputData (req. body. key);


  const result = openHash. remove (key);


  console. log (result);


  res. send (result);


  return undefined;

});




app. post ("/api/closeHash/remove", (req, res) => {

  const key = workInputData (req. body. key);


  const result = closeHash. remove (key);


console. log (result);

  res. send (result);


  return undefined;

});




app. get ("/api/openHash/size", (req, res) => {

  const size = openHash. getSize ();


  res. send (String (size));


  return undefined;

});




app. get ("/api/closeHash/size", (req, res) => {

  const size = closeHash. getSize ();


  res. send (String (size));


  return undefined;

});




app. get ("/api/openHash/items", (req, res) => {

  const items = openHash. getItems ();


  res. send (String (items));


  return undefined;

});




app. get ("/api/closeHash/items", (req, res) => {

  const items = closeHash. getItems ();


  res. send (String (items));


  return undefined;

});




app. get ("/api/openHash/coefficient", (req, res) => {

  const coefficient = openHash. getCoefficient ();


  res. send (String (coefficient));


  return undefined;

});




app. get ("/api/closeHash/coefficient", (req, res) => {

  const coefficient = closeHash. getCoefficient ();


  res. send (String (coefficient));


  return undefined;

});




app. get ("/api/openHash/conflicts", (req, res) => {

  const conflicts = openHash. getConflicts ();


  res. send (String (conflicts));


  return undefined;

});




app. get ("/api/closeHash/conflicts", (req, res) => {

  const conflicts = closeHash. getConflicts ();


  res. send (String (conflicts));


  return undefined;

});




app. get ("/api/closeHash/conflicts", (req, res) => {

  res. send ("0");

});




app. post ("/api/openHash/resize", (req, res) => {

  const size = workInputData (req. body. size);


  openHash. resize (size);
  openHash. rebuild ();


  res. send (true);

});




app. post ("/api/closeHash/resize", (req, res) => {

  const size = workInputData (req. body. size);


  closeHash. resize (size);
  closeHash. rebuild ();


  res. send (true);

});




app. get ("/api/openHash/save", (req, res) => {

  const hashTable = circularJson. stringify (openHash. save ());


  jsonDb. push ("/openHash", hashTable);


  res. send (true);

});




app. get ("/api/closeHash/save", (req, res) => {

  const hashTable = circularJson. stringify (closeHash. save ());


  jsonDb. push ("/closeHash", hashTable);


  res. send (true);

});




app. get ("/api/openHash/globRemove", (req, res) => {

  openHash. globRemove ();


  const hashTable = circularJson. stringify (openHash. save ());


  jsonDb. push ("/openHash", hashTable);


  res. send (true);

});




app. get ("/api/closeHash/globRemove", (req, res) => {

  closeHash. globRemove ();


  const hashTable = circularJson. stringify (closeHash. save ());


  jsonDb. push ("/closeHash", hashTable);


  res. send (true);

});




app. listen (3000);
