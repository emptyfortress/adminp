import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		headers: [
			{ class: '', value: 'title', width: '', active: true, sortable: true, align: 'start', text: 'Название' },
			{ class: 'text-no-wrap', value: 'executor', width: '400', active: true, sortable: true, align: 'start', text: 'Исполнитель' },
			{ class: '', value: 'author', width: '160', active: true, sortable: true, align: 'start', text: 'Автор' },
			{ class: 'text-no-wrap', value: 'deadline', width: '150', active: true, sortable: true, align: 'start', text: 'Срок' },
			{ class: 'text-no-wrap', value: 'created', width: '150', active: true, sortable: true, align: 'start', text: 'Дата' },
			{ class: 'text-right', value: 'files', width: '90', active: true, sortable: true, align: 'end', text: 'Файлы' },
			{ class: 'text-no-wrap', value: 'status', width: '130', active: true, sortable: true, align: 'start', text: 'Статус' }
		],
		mini: false,
		grouping: false,
		dialog: false
	},
	getters: {
		drawer: state => { return state.drawer },
		headers: state => { return state.headers },
		mini: state => { return state.mini },
		grouping: state => { return state.grouping },
		dialog: state => { return state.dialog }
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		toggleGrouping (state) { state.grouping = !state.grouping },
		toggleDialog (state) { state.dialog = !state.dialog },
		setGrouping (state, payload) { state.grouping = payload },
		offDrawer (state) { state.drawer = false },
		setHeaders (state, payload) { state.headers = payload },
		setMini (state, payload) { state.mini = payload }
	},
	actions: {},
	modules: {}
})
