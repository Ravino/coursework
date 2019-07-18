export default [

  {
    "name": "Добавить",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowForms", "AddDataForm");


      event. stopPropagation ();
      event. preventDefault ();

    },
  },


  {
    "name": "Удалить",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowForms", "RemoveDataForm");

      event. stopPropagation ();
      event. preventDefault ();

    },
  },


  {
    "name": "Искать",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowForms", "SearchDataForm");


      event. stopPropagation ();
      event. preventDefault ();


      return true;

    },
  },


  {
    "name": "Сохранить",
    "action": function (event, castomThis) {

      castomThis. $axios. get ("/api/openHash/save"). then ( data => alert ("Сохранено!"));


      event. stopPropagation ();
      event. preventDefault ();


      return true;

    },
  },


  {
    "name": "Отчистить",
    "action": function (event, castomThis) {

      castomThis. $axios. get ("/api/openHash/globRemove"). then ( data => {

        castomThis. $bus. $emit ("TableOpenHashDataset");


        alert ("Отчищено!");

      });


      event. stopPropagation ();
      event. preventDefault ();


      return true;

    },

  },


  {
    "name": "Таблица сырых данных",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowTables", "RawDataTable");


      event. stopPropagation ();
      event. preventDefault ();


      return true;

    },

  },


  {
    "name": "Таблица хешированных данных",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowTables", "HashDataTable");


      event. stopPropagation ();
      event. preventDefault ();


      return true;

    },

  },


  {
    "name": "Главное меню",
    "action": function (event, castomThis) {

      castomThis. $router. push ("/");


      event. stopPropagation ();
      event. preventDefault ();


      return true;

    },
  },
];
