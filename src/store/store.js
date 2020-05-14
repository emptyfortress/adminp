import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLogged: false,
		drawer: true,
		add: false,
		widget1: [
			{ id: 0, smart: true, badge: 5, 'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0', selected: true, text: 'Проблемы' },
			{ id: 1, smart: true, badge: 2, 'x': 2, 'y': 0, 'w': 2, 'h': 2, 'i': '1', selected: true, text: 'Сервера' },
			{ id: 2, smart: true, badge: 10, 'x': 4, 'y': 0, 'w': 2, 'h': 2, 'i': '2', selected: true, text: 'Подключения' },
			{ id: 3, smart: true, badge: null, 'x': 6, 'y': 0, 'w': 2, 'h': 2, 'i': '3', selected: true, text: 'Обновления' },
			{ id: 4, smart: true, badge: 4, 'x': 8, 'y': 0, 'w': 2, 'h': 2, 'i': '4', selected: true, text: 'Процессы' },
			{ id: 5, smart: true, badge: 25, 'x': 10, 'y': 0, 'w': 2, 'h': 2, 'i': '5', selected: true, text: 'Уведомления' },

			{ id: 6, 'x': 0, 'y': 2, 'w': 2, 'h': 2, 'i': '6', selected: false, text: '' },
			{ id: 7, 'x': 2, 'y': 2, 'w': 2, 'h': 2, 'i': '7', selected: false, text: '' },
			{ id: 8, 'x': 4, 'y': 2, 'w': 2, 'h': 2, 'i': '8', selected: false, text: '' },
			{ id: 9, 'x': 6, 'y': 2, 'w': 2, 'h': 2, 'i': '9', selected: false, text: '' },
			{ id: 10, 'x': 8, 'y': 2, 'w': 2, 'h': 2, 'i': '10', selected: false, text: '' },
			{ id: 11, 'x': 10, 'y': 2, 'w': 2, 'h': 2, 'i': '11', selected: false, text: '' },

			{ id: 12, 'x': 0, 'y': 4, 'w': 2, 'h': 2, 'i': '12', selected: false, text: '' },
			{ id: 13, 'x': 2, 'y': 4, 'w': 2, 'h': 2, 'i': '13', selected: false, text: '' },
			{ id: 14, 'x': 4, 'y': 4, 'w': 2, 'h': 2, 'i': '14', selected: false, text: '' },
			{ id: 15, 'x': 6, 'y': 4, 'w': 2, 'h': 2, 'i': '15', selected: false, text: '' },
			{ id: 16, 'x': 8, 'y': 4, 'w': 2, 'h': 2, 'i': '16', selected: false, text: '' },
			{ id: 17, 'x': 10, 'y': 4, 'w': 2, 'h': 2, 'i': '17', selected: false, text: '' },

			{ id: 18, 'x': 0, 'y': 5, 'w': 2, 'h': 2, 'i': '18', selected: false, text: '' },
			{ id: 19, 'x': 2, 'y': 5, 'w': 2, 'h': 2, 'i': '19', selected: false, text: '' }
		],
		mini: true,
		selectMode: false,
		searchMode: false,
		dialog: false,
		overlay: false
	},
	getters: {
		isLogged: state => { return state.isLogged },
		overlay: state => { return state.overlay },
		drawer: state => { return state.drawer },
		add: state => { return state.add },
		headers: state => { return state.headers },
		mini: state => { return state.mini },
		selectMode: state => { return state.selectMode },
		searchMode: state => { return state.searchMode },
		dialog: state => { return state.dialog },
		chat: state => { return state.chat },
		widget1: state => { return state.widget1 },
		widget2: state => { return state.widget2 }
	},
	mutations: {
		login (state) { state.isLogged = true },
		logout (state) { state.isLogged = false },
		toggleDrawer (state) { state.drawer = !state.drawer },
		toggleAdd (state) { state.add = !state.add },
		toggleDialog (state) { state.dialog = !state.dialog },
		setSelectMode (state, payload) { state.selectMode = payload },
		toggleSelectMode (state) { state.selectMode = !state.selectMode },
		toggleSearchMode (state) { state.searchMode = !state.searchMode },
		setSearchMode (state, payload) { state.searchMode = payload },
		offDrawer (state) { state.drawer = false },
		setHeaders (state, payload) { state.headers = payload },
		setMini (state, payload) { state.mini = payload },
		setOverlay (state, payload) { state.overlay = payload },
		toggleChat (state) { state.chat = !state.chat },
		updateWidget1 (state, payload) { state.widget1 = payload }
	},
	actions: {},
	modules: {}
})
