import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';

import OpenHash from "./views/OpenHash.vue";
import CloseHash from "./views/CloseHash.vue";
import Experiments from "./views/Experiments.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      "path": "/",
      "redirect": "/menu",
    },

    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },

    {
      path: '/openHash',
      name: 'openHash',
      component: OpenHash,
    },


    {
      "path": "/closeHash",
      "name": "closeHash",
      "component": CloseHash,
    },

    {
      "path": "/experiments",
      "name": "Experiments",
      "component": Experiments,
    },

  ],
});
