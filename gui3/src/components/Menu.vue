<template>

 <v-navigation-drawer fixed permanent>

    <v-toolbar flat>

      <v-list three-line>

        <v-list-tile-title>
          <span>Меню</span>
        </v-list-tile-title>


        <v-list-tile v-for="item in menuList">
          <v-btn href = "#" v-on:click = "item. action ($event, castomThis)"> {{ item. name }} </v-btn>
        </v-list-tile>


      </v-list>

    </v-toolbar>


  </v-navigation-drawer>


</template>



<script>

  export default {

    "name": "MenuPage",


    "data": function () {

      return {
        "castomThis": this,
      };

    },

    "props": ["menuList"],

  };

</script>
