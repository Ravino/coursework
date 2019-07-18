<template>

  <v-container fluid grid-list-md>

    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >

      <template v-slot:item="props">

        <v-flex>

          <v-card>

            <v-list dense>

              <v-list-tile>

                <v-list-tile-content v-for = "elem in props. item" class="align-center">{{ elem }}</v-list-tile-content>

              </v-list-tile>

            </v-list>

          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>





<script>

  export default {

    "name": "RawDataTable",


    "data": function () {

      return {
        "rowsPerPageItems": [4, 8, 12],
        "pagination": {
          "rowsPerPage": 10,
        },
      };
    },


    "computed": {

      "items": function () {

        return this. $store. state. datasets. raw;

      },

    },

  };

</script>
