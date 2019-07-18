<template>

  <v-layout column fill-height justify-space-around align-center>

    <v-flex>
    <HeaderPage />
    </v-flex>



    <v-flex row>

      <div>

        <h3>Метод цепочек</h3>


        <ShowExperimentsForms :urlRequest = "urlRequest" :typeTable = "typeTableOne" />

      </div>


      <div>

        <h3>Открытая адресация</h3>


        <ShowExperimentsForms :urlRequest = "urlRequest" :typeTable = "typeTableTwo" />

      </div>


      <div>
        <MenuPage :menuList="menuData" />
      </div>

    </v-flex>


    <v-flex row>

      <div>

        <h3>Метод цепочек</h3>


        <ShowExperimentsTables :urlRequest = "urlRequest" :typeTable = "typeTableOne" />

      </div>


      <div>

        <h3>Открытая адресация</h3>


        <ShowExperimentsTables :urlRequest = "urlRequest" :typeTable = "typeTableTwo" />

      </div>

    </v-flex>


    <v-flex>
      <FooterPage />
    </v-flex>

  </v-layout>

  </div>

</template>



<script>

  import menuData from "@/datasets/experiments/menu.js";

  import HeaderPage from "@/components/HeaderPage.vue";
  import FooterPage from "@/components/FooterPage.vue";
  import ShowExperimentsForms from "@/components/ShowExperimentsForms.vue";
  import ShowExperimentsTables from "@/components/ShowExperimentsTables.vue";
  import MenuPage from "@/components/Menu.vue";


  export default {

    "name": "Experiments",

    "data": function () {

      return {
        "urlRequest": "/api/",
        "typeTableOne": "openHash",
        "typeTableTwo": "closeHash",
        "menuData": menuData,

        "tables": [
          "openHash",
          "closeHash",
        ],

        "statistics": [
          "conflicts",
          "coefficient",
          "items",
          "size",
        ],
      };

    },


    "created": function () {

      const urlRequest = this. urlRequest;

      const typeTableOne = this. typeTableOne;
      const typeTableTwo = this. typeTableTwo;


      const tables = this. tables;
      const statistics = this. statistics;


      this. $bus. $on ("TablesStatistic", (typeTable, typeStatistic, payLoad) => {

        for (let i of tables) {

          for (let j of statistics) {

            this. $axios. get (urlRequest + i + "/" + j). then ( data => {

              const payload = {
                "typeTable": i,
                "typeStatistic": j,
                "data": data. data,
              };


              setTimeout (() => this. $store. commit ("updateStatistic", payload), 100);

            });

          }

        }

      });

    },


    "mounted": function () {

      this. $bus. $emit ("TablesStatistic");

    },


    "components": {
      "HeaderPage": HeaderPage,
      "FooterPage": FooterPage,
      "ShowExperimentsForms": ShowExperimentsForms,
      "ShowExperimentsTables": ShowExperimentsTables,
      "MenuPage": MenuPage,
    },

  };

</script>
