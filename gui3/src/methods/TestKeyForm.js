export default {

  "parser": function () {

    const data = this. dataKey;


    const dataKey = data. split ("\n");
    dataKey. pop ();


    for (let i = 0; i < dataKey. length; i++) {

      dataKey [i] = dataKey [i]. split (",");

    }


    const sendData = [];


    for (let i in dataKey) {

      sendData [i] = [];


      const object = {
        "key": dataKey [i] [0],
        "nameAviaCompany": dataKey [i] [1],
        "destination": dataKey [i] [2],
      };


      sendData [i] = object;

    }


    this. pushData = sendData;

  },




  "validate": function () {

    const patternData = this. patternData;
    const dataKey = this. dataKey;


    if (patternData. test (dataKey) == false) {

      alert ("Строки введены не корректно!\nПример:'FF-1234,Avrora,Moscow\n'");


      return false;

    }


    return true;

  },




  "sendData": function (event, urlRequest, typeTable) {

    if (this. validate () ==  false) {

      return false;

    }


    this. parser ();


    const pushData = this. pushData;


    for (let value of pushData) {


      this. $axios. post (urlRequest + typeTable + "/add", value). then ( req => {

        this. dataKey = "";


        if (req. data == false) {

          alert ("Ключ " + value. key + " занят!");


          return undefined;

        }


        this. $bus. $emit (typeTable + "Dataset");


         return undefined;


      });

    }


    event. stopPropagation ();
    event. preventDefault ();


    return undefined;

  },

};
