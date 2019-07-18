export default {

  "validate": function () {

    const patternSize = this. patternSize;


    const size = this. size;


    if (patternSize. test (size) === false) {

      alert ("Размерность может быть только числом!");


      return false;

    }


    if (size < 32) {

      alert ("Размерность не может быть меньше 32!");


      return false;

    }


    return true;

  },


  "sendData": function (event, urlRequest, typeTable) {

    if (this. validate () ==  false) {

      return false;

    }



    const value = {
      "size": this. size,
    };


    this. $axios. post (urlRequest + typeTable + "/resize", value). then ( req => {

      this. size = "";


      this. $bus. $emit ("TablesStatistic");


       return undefined;


    });


    event. stopPropagation ();
    event. preventDefault ();


    return undefined;

  },

};
