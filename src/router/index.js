import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import docIndex from '@/components/doc/index';

import chat from '@/components/doc/chat/index';
import hjD from '@/components/doc/hj/index';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/doc',
      name: 'docIndex',
      component: docIndex
    },
    {
      path: '/chat/:chatID',
      name: 'chat',
      component: chat
    },
    {
      path: '/posthj/:type',
      name: 'hjD',
      component: hjD
    },
  ]
})
