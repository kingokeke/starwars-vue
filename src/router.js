import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/layout/Home.vue';
import Starships from './components/layout/Starships.vue';
import Characters from './components/layout/Characters.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/starships',
      name: 'starships',
      component: Starships
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    }
  ]
});
