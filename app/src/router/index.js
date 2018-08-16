import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index/index';
import teaHouse from '@/views/teaHouse/teaHouse';
import openStatus from '@/views/teaHouse/openStatus';
import closeStatus from '@/views/teaHouse/closeStatus';
import newTeaHouse from '@/views/teaHouse/newTeaHouse';
import submitSuccess from '@/views/teaHouse/submitSuccess';

import market from '@/views/market/market';
import find from '@/views/find/find';
import findNew from '@/views/find/findNew';
import vote from '@/views/find/vote';
import topicInfo from '@/views/find/topicInfo';
import offlineTea from '@/views/find/offlineTea';
import cityOffline from '@/views/find/cityOffline';
import subCity from '@/views/find/subCity';
import findFriend from '@/views/find/findFriend';

import mine from '@/views/mine/mine';
import myTea from '@/views/mine/myTea';
import myAttention from '@/views/mine/myAttention';
import myHerald from '@/views/mine/myHerald';
import setPage from '@/views/mine/setPage';
import advise from '@/views/mine/advise';

import login from '@/views/mine/login';
import register from '@/views/mine/register';
import modifyPwd from '@/views/mine/modifyPwd';
import resetPwd from '@/views/mine/resetPwd';

import agreement from '@/views/others/registerAgree';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
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
      path: '/openStatus',
      name: 'openStatus',
      component: openStatus
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
      path: '/submitSuccess',
      name: 'submitSuccess',
      component: submitSuccess
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
      path: '/findNew',
      name: 'findNew',
      component: findNew
    },
    {
      path: '/vote',
      name: 'vote',
      component: vote
    },
    {
      path: '/topicInfo',
      name: 'topicInfo',
      component: topicInfo
    },
    {
      path: '/offlineTea',
      name: 'offlineTea',
      component: offlineTea
    },
    {
      path: '/cityOffline',
      name: 'cityOffline',
      component: cityOffline
    },
    {
      path: '/subCity',
      name: 'subCity',
      component: subCity
    },
    {
      path: '/findFriend',
      name: 'findFriend',
      component: findFriend
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/myTea',
      name: 'myTea',
      component: myTea
    },
    {
      path: '/myAttention',
      name: 'myAttention',
      component: myAttention
    },
    {
      path: '/myHerald',
      name: 'myHerald',
      component: myHerald
    },
    {
      path: '/setPage',
      name: 'setPage',
      component: setPage
    },
    {
      path: '/advise',
      name: 'advise',
      component: advise
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
    },
    {
      path: '/modifyPwd',
      name: 'modifyPwd',
      component: modifyPwd
    },
    {
      path: '/resetPwd',
      name: 'resetPwd',
      component: resetPwd
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    }
  ]
});
