import Vue from 'vue'
import VueRouter from 'vue-router'
import Dash from '../views/Dash.vue'
import Notifications from '../components/Notifications.vue'
import Logs from '../components/Logs.vue'
import Errorlist from '../components/Errorlist.vue'
import Setup from '../components/Setup.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Dash,
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
		path: '/setup',
		name: 'setup',
		component: Setup,
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: false },
				{text: 'Настройки', href: '/setup', disabled: true },
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
		path: '/about',
		name: 'about',
		// component: About
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			breadcrumbs: [
				{text: 'Главная', href: '/', disabled: false },
				{text: 'О программе', href: '/about', disabled: true },
			],
		},
	},
]

const router = new VueRouter({
	// mode: 'history',
	routes,
})

export default router
