import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vuetest from '../components/Vuetest.vue'
import Notifications from '../components/Notifications.vue'
import Servers from '../components/Servers.vue'
import Problems from '../components/Problems.vue'
import Logs from '../components/Logs.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: true },
			],
		},
	},
	{
		path: '/problems',
		name: 'problems',
		component: Problems,
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: false },
				{text: 'Проблемы', href: '/problems', disabled: true },
			],
		},
	},
	{
		path: '/servers',
		name: 'servers',
		component: Servers,
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: false },
				{text: 'Сервера', href: '/servers', disabled: true },
			],
		},
	},
	{
		path: '/logs',
		name: 'logs',
		component: Logs,
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: false },
				{text: 'Логи', href: '/logs', disabled: true },
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
