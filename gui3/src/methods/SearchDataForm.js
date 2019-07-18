export default {

  "validate": function () {

    const patternKey = this. patternKey;


    const key = this. key;


    if (patternKey. test (key) === false) {

      alert ("Ключ не верного формата! \n Пример ключа FF-1326");


      return false;

    }


    return true;

  },


  "sendData": function (event, urlRequest, typeTable) {

    if (this. validate () ==  false) {

      return false;

    }




    const value = {
      "key": this. key,
    };


    this. $axios. post (urlRequest + "/search", value). then ( req => {

      this. key = "";


      if (req. data == false) {

        alert ("Ключ не существует!");


        return undefined;

      }


      this. $bus. $emit (typeTable + "Dataset", req. data);


      return undefined;

    });


    event. stopPropagation ();
    event. preventDefault ();


    return undefined;

  },

};
