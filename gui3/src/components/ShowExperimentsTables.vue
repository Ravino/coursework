<template>

  <div :is = "showForm" :urlRequest = "urlRequest" :typeTable = "typeTable" ></div>

</template>



<script>

  import Conflicts from "@/components/ConflictsExperiments.vue";
  import Coefficient from "@/components/Coefficient.vue";
  import Items from "@/components/Items.vue";
  import Size from "@/components/Size.vue";


  const showForms = {
    "Conflicts": Conflicts,
    "Coefficient": Coefficient,
    "Items": Items,
    "Size": Size,
  };


  export default {

    "name": "ShowExperimentsTables",


    "data": function () {

      return {
        "showForms": showForms,
        "showForm": showForms. Size,
      };

    },


    "props": ["urlRequest", "typeTable"],


    "created": function () {

      this. $bus. $on ("ShowExperimentsTables", (data) => {

        this. showForm = this. showForms [data];

      });

    },

  };

</script>
