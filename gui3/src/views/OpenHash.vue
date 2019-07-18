<template>

  <v-layout column fill-height justify-space-around align-center>

    <v-flex>
    <HeaderPage />
    </v-flex>



    <v-flex>

      <ShowForms :urlRequest = "urlRequest" :typeTable = "typeTable" />


      <MenuPage :menuList="menuData" />

    </v-flex>


    <v-flex>
      <ShowTables :urlRequest = "urlRequest" :typeTable = "typeTable" />
    </v-flex>


    <v-flex>
      <FooterPage />
    </v-flex>

  </v-layout>

  </div>

</template>



<script>

  import menuData from "@/datasets/openHash/menu.js";

  import HeaderPage from "@/components/HeaderPage.vue";
  import FooterPage from "@/components/FooterPage.vue";
  import ShowForms from "@/components/ShowForms.vue";
  import ShowTables from "@/components/ShowTables.vue";
  import MenuPage from "@/components/Menu.vue";


  export default {

    "name": "OpenHash",

    "data": function () {

      return {
        "urlRequest": "/api/openHash",
        "typeTable": "TableOpenHash",
        "menuData": menuData,
      };

    },


    "created": function () {

      const urlRequest = this. urlRequest;
      const typeTable = this. typeTable;

      this. $bus. $on (typeTable + "Dataset", (data) => {

        if (typeof data == "object") {

          this. $store. commit (typeTable + "Update", data);


          return undefined;

        }


        this. $axios. get (urlRequest + "/table"). then ( data => {

          data = data. data;


          this. $store. commit (typeTable + "Update", data);

        });

      });

    },


    "components": {
      "HeaderPage": HeaderPage,
      "FooterPage": FooterPage,
      "ShowForms": ShowForms,
      "ShowTables": ShowTables,
      "MenuPage": MenuPage,
    },

  };

</script>
