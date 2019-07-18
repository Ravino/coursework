<template>

  <v-form>

    <v-container>

      <v-layout column wrap justify-space-between>

        <v-flex>
          <v-text-field box placeholder = "Ключ данных" v-model = "key"></v-text-field>
        </v-flex>


        <v-flex>
          <v-text-field box placeholder = "Имя авиакомпании" v-model = "nameAviaCompany"></v-text-field>
        </v-flex>


        <v-flex>
          <v-text-field box placeholder = "Пункт назначения" v-model = "destination"></v-text-field>
        </v-flex>


        <v-flex>
          <v-btn v-on:click = "sendData ($event, urlRequest, typeTable)">Отправить</v-btn>
        </v-flex>


      </v-layout>

    </v-container>

  </v-form>

</template>




<script>

  import methods from "@/methods/AddDataForm.js";


  export default {

    "name": "AddDataForm",


    "data": function () {

      return {
        "patternKey": /^([A-Z]{2,2})(-)([0-9]{4,4})$/,
        "patternAviaDestination": /^[A-zА-я0-9-]{3,}$/,
        "key": "",
        "nameAviaCompany": "",
        "destination": "",
      };

    },


    "props": ["urlRequest", "typeTable"],


    "methods": methods,

  };

</script>
