export default {

  "updateStatistic": function (state, payload) {

    state [payload. typeTable] [payload. typeStatistic] = payload. data;

  },


  "rawUpdate": function (state, data) {

    state. datasets. raw = data;

  },


  "TableOpenHashUpdate": function (state, data) {

    state. datasets. TableOpenHash = data;

  },


  "TableCloseHashUpdate": function (state, data) {

    state. datasets. TableCloseHash = data;

  },

};
