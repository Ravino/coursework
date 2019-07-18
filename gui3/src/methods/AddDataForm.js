export default {

  "validate": function () {

    const patternKey = this. patternKey;
    const patternAviaDestination = this. patternAviaDestination;


    const key = this. key;
    const nameAviaCompany = this. nameAviaCompany;
    const destination = this. destination;


    if (patternKey. test (key) === false) {

      alert ("Ключ не верного формата! \n Пример ключа FF-1326");


      return false;

    }


    if (patternAviaDestination. test (nameAviaCompany) === false) {

      alert ("Название авиакомпании не верного формата! \n Пример названия авиакомпании: Аэрофлот");


      return false;

    }


    if (patternAviaDestination. test (destination) === false) {

      alert ("Название конечного пункта назначения не верного формата! \n Пример названия конечного пункта назначения: Москва");


      return false;

    }


    return true;

  },


  "sendData": function (event, urlRequest, typeTable) {

    if (this. validate () ==  false) {

      return false;

    }



  const data = {
    "key": this. key,
    "nameAviaCompany": this. nameAviaCompany,
    "destination": this. destination,
  };


    this. $axios. post (urlRequest + "/add", data). then ( req => {

      this. key = "";
      this. nameAviaCompany = "";
      this. destination = "";


      if (req. data == false) {

        alert ("Ключ занят!");


        return undefined;

      }


      this. $bus. $emit (typeTable + "Dataset");


      return undefined;

    });


    event. stopPropagation ();
    event. preventDefault ();


    return undefined;

  },

};
