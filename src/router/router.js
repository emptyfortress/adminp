import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Vuetest from '../components/Vuetest.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/vuetest',
		name: 'vuetest',
		component: Vuetest
	},
	{
		path: '/about',
		name: 'about',
		// component: About
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	routes
})

export default router
