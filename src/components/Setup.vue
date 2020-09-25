<template lang="pug">
.pa-5
	.zag Настройки
	v-tabs(centered v-model="tabs").cardtabs
		v-tab(key="1" @click="setTab(0)") Соединения
		v-tab(key="2" @click="setTab(1)") Worker service
		v-tab-item(key="1").pa-5
			.inf
				v-icon(color="link").mr-2 mdi-information-outline
				| Подключение к адресу настроек:
				span https://localhost:8080/api

			.mygrid
				v-expansion-panels( multiple ).pan
					v-expansion-panel( v-for="(n,i) in 2" :key="n" )
						v-expansion-panel-header {{ types[i].title }}
						v-expansion-panel-content.mt-4
							.myrow
								v-select(label="Тип соединения" dense :items="select" :value="types[i].title" disabled)
								v-spacer
								.proc Всего соединений: {{ types[i].connections }}
								v-spacer
								v-btn(@click="toggleDialog" small depressed color="primary")
									span Добавить экземпляр
							Docsvision(v-if="i === 0")

				v-expansion-panels( multiple ).pan
					v-expansion-panel( v-for="(n,i) in 2" :key="n" )
						v-expansion-panel-header {{types[i+2].title}}
						v-expansion-panel-content.mt-4
							.myrow
								v-select(label="Тип соединения" dense :items="select" :value="types[i+2].title" disabled)
								v-spacer
								.proc Всего соединений: {{ types[i+2].connections }}
								v-spacer
								v-btn(@click="toggleDialog" small depressed color="primary")
									span Добавить экземпляр
							Exchange(v-if="i === 0")

		v-tab-item(key="2").pa-5
			Uzel
	Dialog
</template>

<script>
import SetupTable from '@/components/SetupTable'
import Uzel from '@/components/Uzel'
import Dialog from '@/components/Dialog'
import Docsvision from '@/components/Docsvision'
import Exchange from '@/components/Exchange'




export default {
	data () {
		return {
			dialog: false,
			select: ['Docsvison', 'SQL', 'Exchange', 'Менеджер решений'],
			types: [
				{ id: 0, title: 'Docsvison', connections: 1 },
				{ id: 1, title: 'SQL', connections: 0},
				{ id: 2, title: 'Exchange', connections: 3},
				{ id: 3, title: 'Менеджер решений', connections: 0},
			],
			conn1: [
				{ id: 0, name: 'Тестовая DVM', type: 'SQL', connections: 3  },
				{ id: 1, name: 'Боевая DVM', type: 'SQL' },
				{ id: 2, name: 'Current55', type: 'Docsvision' },
			],
			conn2: [
				{ id: 0, name: 'Current33', type: 'SQL' },
				{ id: 1, name: 'Current77', type: 'SQL' },
			],

		}
	},
	computed: {
		tabs: {
			get: function () {
				return this.$store.getters.setupTab
			},
			set: function () {
			},
		},
	},
	methods: {
		toggleDialog () {
			this.$store.commit('toggleDialog')
		},
		setTab (e) {
			this.$store.commit('setTab', e)
		},
	},
	components: {
		SetupTable,
		Uzel,
		Dialog,
		Docsvision,
		Exchange,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.inf {
	span {
		color: $link;
		margin-left: 1rem;
	}
}
.zg {
	font-size: 1.3rem;
}
.mygrid {
	margin-top: 2rem;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(2, 1fr);
	align-items: start;
	@media (max-width:1064px) {
		grid-template-columns: 1fr;
	}
}
.v-expansion-panel--active > .v-expansion-panel-header {
	min-height: 64px;
	font-size: 1.3rem;
}
.proc {
	font-size: 0.8rem;
	background: $yellow;
	padding: 3px 10px;
	border-radius: 32px;
	color: #000;
}
.myrow {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 1rem;

	&.border {
		border-bottom: 1px solid #ccc;
	}
}
</style>
