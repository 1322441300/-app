import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index/index';
import teaHouse from '@/views/teaHouse/teaHouse';
import closeStatus from '@/views/teaHouse/closeStatus';
import newTeaHouse from '@/views/teaHouse/newTeaHouse';

import market from '@/views/market/market';
import find from '@/views/find/find';
import mine from '@/views/mine/mine';
import login from '@/views/mine/login';
import register from '@/views/mine/register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/teaHouse',
      name: 'teaHouse',
      component: teaHouse
    },
    {
      path: '/closeStatus',
      name: 'closeStatus',
      component: closeStatus
    },
    {
      path: '/newTeaHouse',
      name: 'newTeaHouse',
      component: newTeaHouse
    },
    {
      path: '/market',
      name: 'market',
      component: market
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
});
