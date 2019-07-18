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


                <v-list-tile-content class="align-center">{{ props. item. hashKey }}</v-list-tile-content>

                <v-list-tile-content class="align-center">{{ props. item. key }}</v-list-tile-content>

                <v-list-tile-content class="align-center">{{ props. item. nameAviaCompany }}</v-list-tile-content>

                <v-list-tile-content class="align-center">{{ props. item. destination }}</v-list-tile-content>

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

    "name": "HashDataTable",


    "data": function () {

      return {
        "rowsPerPageItems": [4, 8, 12],
        "pagination": {
          "rowsPerPage": 4,
        },
      };
    },


    "props": ["urlRequest", "typeTable"],


    "mounted": function () {

      const typeTable = this. typeTable;


      this. $bus. $emit (typeTable + "Dataset");

    },


    "computed": {

      "items": function () {

        const typeTable = this. typeTable;


        return this. $store. state. datasets [typeTable];

      },

    },

  };

</script>
