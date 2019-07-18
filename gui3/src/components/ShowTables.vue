<template>

  <div :is = "showTable" :urlRequest = "urlRequest" :typeTable = "typeTable" ></div>

</template>



<script>

  import RawDataTable from "@/components/RawDataTable.vue";
  import HashDataTable from "@/components/HashDataTable.vue";


  const showTables = {
    "RawDataTable": RawDataTable,
    "HashDataTable": HashDataTable,
  };


  export default {

    "name": "ShowTables",


    "data": function () {

      return {
        "showTables": showTables,
        "showTable": showTables. HashDataTable,
      };

    },


    "props": ["urlRequest", "typeTable"],


    "created": function () {

      this. $bus. $on ("ShowTables", (data) => {

        this. showTable = this. showTables [data];

      });

    },

  };

</script>
