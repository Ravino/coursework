<template>

  <v-form>

    <v-container>

      <v-layout column wrap justify-space-between>

        <v-flex>
          <v-text-field box placeholder = "Новый размер таблицы" v-model = "size"></v-text-field>
        </v-flex>


        <v-flex>
          <v-btn v-on:click = "sendData ($event, urlRequest, typeTable)">Отправить</v-btn>
        </v-flex>

      </v-layout>

    </v-container>

  </v-form>

</template>




<script>

  import methods from "@/methods/ResizeTableForm.js";


  export default {

    "name": "ResizeTableForm",


    "data": function () {

      return {
        "patternSize": /^[0-9]{1,}$/,
        "size": "",
      };

    },


    "props": ["urlRequest", "typeTable"],


    "methods": methods,

  };

</script>
