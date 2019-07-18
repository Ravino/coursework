export default [

  {
    "name": "Размерность",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowExperimentsForms", "ResizeTableForm");
      castomThis. $bus. $emit ("ShowExperimentsTables", "Size");


      event. stopPropagation ();
      event. preventDefault ();

    },
  },


  {
    "name": "Заполненность",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowExperimentsTables", "Coefficient");

      event. stopPropagation ();
      event. preventDefault ();

    },
  },


  {
    "name": "Коллизии",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowExperimentsTables", "Conflicts");


      event. stopPropagation ();
      event. preventDefault ();


      return true;

    },
  },


  {
    "name": "Элементы",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowExperimentsTables", "Items");


      event. stopPropagation ();
      event. preventDefault ();


      return true;

    },

  },


  {
    "name": "Тестирование ключей",
    "action": function (event, castomThis) {

      castomThis. $bus. $emit ("ShowExperimentsForms", "TestKeyForm");


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
