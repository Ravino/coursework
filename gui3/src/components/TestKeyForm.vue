<template>

  <v-form>

    <v-container>

      <v-layout column wrap justify-space-between>

        <v-flex>
          <v-textarea box placeholder = "Исходные данные" v-model = "dataKey"></v-textarea>
        </v-flex>


        <v-flex>
          <v-btn v-on:click = "sendData ($event, urlRequest, typeTable)">Отправить</v-btn>
        </v-flex>

      </v-layout>

    </v-container>

  </v-form>

</template>




<script>

  import methods from "@/methods/TestKeyForm.js";


  export default {

    "name": "TestKeyForm",


    "data": function () {

      return {
        "patternData": /^([A-Z]{2,2}-[0-9]{4,4},[A-zА-я\s]{3,},[A-zА-я\s]{3,}\n){1,}$/,
        "dataKey": "",
        "pushData": "",
      };

    },


    "props": ["urlRequest", "typeTable"],


    "methods": methods,

  };

</script>
