import Vue from 'vue'
import VueRouter from 'vue-router'
import Dash from '../views/Dash.vue'
import Vuetest from '../components/Vuetest.vue'
import Notifications from '../components/Notifications.vue'
import Errorlist from '../components/Errorlist.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Dash,
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: true},
			],
		},
	},
	{
		path: '/notifications',
		name: 'notifications',
		component: Notifications,
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: false },
				{text: 'Уведомления', href: '/notifications', disabled: true },
			],
		},
	},
	{
		path: '/notifications/errorlist',
		name: 'errorlist',
		component: Errorlist,
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: false},
				{text: 'Уведомления', href: '/#/notifications', disabled: false},
				{text: 'Ошибки', href: '/#/notifications/errorlist', disabled: true},
			],
		},
	},
	{
		path: '/vuetest',
		name: 'vuetest',
		component: Vuetest,
	},
	{
		path: '/about',
		name: 'about',
		// component: About
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
]

const router = new VueRouter({
	// mode: 'history',
	routes,
})

export default router
