import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const routes = [

	{
		path: '/',
		component: () => import('@/pages/Main')
  },
  {
    path: '/faq',
		component: () => import('@/pages/Faq')
  },
  {
    path: '/cases/:id',
    component: () => import('@/pages/Case'),
    props: true
  },
  {
    path: '/case/create',
    component: () => import('@/pages/CaseCreate')
  },
  {
    path: '/auth',
    component: () => import('@/pages/AuthHandler')
  },
  {
    path: '/user',
    component: () => import('@/pages/User'),
    name: 'loggedUser'
  },
  {
    path: '/user/:id',
    component: () => import('@/pages/User'),
    name: 'user'
  }
]

export default new Router({
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
	// mode: 'history',
	routes
})