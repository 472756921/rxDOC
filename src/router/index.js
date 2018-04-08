import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import docIndex from '@/components/doc/index';

import chat from '@/components/doc/chat/index';
import hjD from '@/components/doc/hj/index';

import patientList from '@/components/patient/index';
import midcDatile from '@/components/patient/midcDatile';
import patientdatile from '@/components/patient/datile';

import zone from '@/components/zone/index';
import zonedatile from '@/components/zone/datile';
import s_datile from '@/components/zone/s_datile';

import newAcitve from '@/components/zone/newAcitve';
import n_shared from '@/components/zone/n_shared';


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
    {
      path: '/patientList',
      name: 'patientList',
      component: patientList
    },
    {
      path: '/midcDatile/:id',
      name: 'midcDatile',
      component: midcDatile
    },
    {
      path: '/patientdatile/:id',
      name: 'patientdatile',
      component: patientdatile
    },
    {
      path: '/zone',
      name: 'zone',
      component: zone
    },
    {
      path: '/zonedatile/:id',
      name: 'zonedatile',
      component: zonedatile
    },
    {
      path: '/s_datile/:id',
      name: 's_datile',
      component: s_datile
    },
    {
      path: '/newAcitve/:type',
      name: 'newAcitve',
      component: newAcitve
    },
    {
      path: '/n_shared',
      name: 'n_shared',
      component: n_shared
    },
  ]
})
