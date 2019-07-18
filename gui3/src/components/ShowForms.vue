<template>

  <div :is = "showForm" :urlRequest = "urlRequest" :typeTable = "typeTable" ></div>

</template>



<script>

  import AddDataForm from "@/components/AddDataForm.vue";
  import SearchDataForm from "@/components/SearchDataForm.vue";
  import RemoveDataForm from "@/components/RemoveDataForm.vue";


  const showForms = {
    "AddDataForm": AddDataForm,
    "SearchDataForm": SearchDataForm,
    "RemoveDataForm": RemoveDataForm,
  };


  export default {

    "name": "ShowForms",


    "data": function () {

      return {
        "showForms": showForms,
        "showForm": showForms. AddDataForm,
      };

    },


    "props": ["urlRequest", "typeTable"],


    "created": function () {

      this. $bus. $on ("ShowForms", (data) => {

        this. showForm = this. showForms [data];

      });

    },

  };

</script>
