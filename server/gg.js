"use strict";

const keys = [
  ["WP-2032", "РУССЭИР", "Белиз"],
  ["KH-6924", "ТУРУХАН", "Маврикий"],
  ["XQ-4163", "СИМАРГЛ", "Афганистан"],
  ["XO-2782", "Аэролимузин", "Виргинские острова"],
  ["HP-2032", "Арго", "Украина"],
  ["DP-7719", "Северо-Запад", "Западная Сахара"],
  ["NS-7778", "Ай Флай", "Кирибати"],
  ["ZT-5534", "СИМАРГЛ", "Камерун"],
  ["WP-2032", "Ред Вингс АО", "Палау"],
  ["YQ-8233", "ЮТ эир ЗАО", "Австралия"],
];



const DoublyList = require ("./tableOpenHash/doublyList.js");
const list = new DoublyList ();



for (let i of keys) {

  const obj = {
    "key": i [0],
    "nameAviaCompany": i [1],
    "destination": i [2],
  };


  list. add (obj);

}



list. print ();
