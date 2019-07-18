<template>

  <v-container fluid grid-list-md>

    <v-flex>

      <v-card>

      <v-list dense>

        <v-list-tile>

        <v-list-tile-content class="align-center">{{ elem }}</v-list-tile-content>

        </v-list-tile>

      </v-list>

    </v-card>
    </v-flex>
  </v-container>
</template>





<script>

  export default {

    "name": "SizeExperiments",


    "props": ["urlRequest", "typeTable", ],


    "data": function () {

      return {

      };
    },


    "mounted": function () {

      this. $bus. $emit ("TablesStatistic");

    },




    "computed": {

      "elem": function () {

        const typeTable = this. typeTable;


        return this. $store. state [typeTable]. size;

      },

    },

  };

</script>
