<template>

    <v-layout column fill-height justify-space-around align-center>

      <v-flex  mb-5>
      <HeaderPage />
    </v-flex>


      <v-flex mb-5>

    <v-navigation-drawer permanent>

      <v-toolbar flat>

        <v-list three-line>

          <v-list-tile-title class="headline text-uppercase">
            <span>Главное меню</span>
          </v-list-tile-title>


<v-list-tile class="headline text-uppercase">
          <router-link to = "/openHash">Метод цепочек</router-link>
</v-list-tile>


<v-list-tile class="headline text-uppercase">
          <router-link to = "/closeHash">Открытая адресация</router-link>
</v-list-tile>



<v-list-tile class="headline text-uppercase">
  <router-link to="/experiments">Эксперименты</router-link>
</v-list-tile>


</v-list>

      </v-toolbar>

    </v-navigation-drawer>

      </v-flex>


      <v-flex>
      <FooterPage />
      </v-flex>

    </v-layout>

</template>




<script>

  import HeaderPage from "@/components/HeaderPage.vue";
  import FooterPage from "@/components/FooterPage.vue";


  export default {

    "name": "MenuMain",


    "created": function () {

      this. $axios. get ("/api/data"). then ( (data) => {

        data = data. data. split ("\n");
        data. pop ();


        for (let i = 0; i < data. length; i++) {
          data [i] = data [i]. split (",");
        }


        this. $store. commit ("rawUpdate", data);

      });
    },

    "components": {
      "HeaderPage": HeaderPage,
      "FooterPage": FooterPage,
    },

  };

</script>
