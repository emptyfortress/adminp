import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trips from '../views/Trips.vue'
import NewTrip from '../views/NewTrip.vue'
import Approve from '../views/Approve.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/trips',
		name: 'trips',
		component: Trips
	},
	{
		path: '/approve/:id',
		name: 'approve',
		component: Approve,
		props: true
	},
	{
		path: '/newtrip/:id',
		name: 'newtrip',
		component: NewTrip,
		props: true
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
