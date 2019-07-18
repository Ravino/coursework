<template>

  <div :is = "showForm" :urlRequest = "urlRequest" :typeTable = "typeTable" ></div>

</template>



<script>

  import ResizeTableForm from "@/components/ResizeTableForm.vue";
  import TestKeyForm from "@/components/TestKeyForm.vue";


  const showForms = {
    "ResizeTableForm": ResizeTableForm,
    "TestKeyForm": TestKeyForm,
  };


  export default {

    "name": "ShowExperimentsForms",


    "data": function () {

      return {
        "showForms": showForms,
        "showForm": showForms. ResizeTableForm,
      };

    },


    "props": ["urlRequest", "typeTable"],


    "created": function () {

      this. $bus. $on ("ShowExperimentsForms", (data) => {

        this. showForm = this. showForms [data];

      });

    },

  };

</script>
