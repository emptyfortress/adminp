<template lang="pug">
.pa-5
	.zag Настройки
	v-tabs(centered v-model="tabs").cardtabs
		v-tab(key="1" @click="setTab(0)") Общие
		v-tab(key="2" @click="setTab(1)") Worker service
		v-tab-item(key="1").pa-5
			.text-center
				.zg Соединения
				.inf
					v-icon(color="link").mr-2 mdi-information-outline
					| Подключение к адресу настроек:
					span https://localhost:8080/api

			.mygrid
				v-expansion-panels( multiple )
					v-expansion-panel( v-for="item in conn1" :key="item.id" )
						v-expansion-panel-header {{ item.name }}
						v-expansion-panel-content
							.item
				v-expansion-panels( multiple )
					v-expansion-panel( v-for="item in conn2" :key="item.id" )
						v-expansion-panel-header {{ item.name }}
						v-expansion-panel-content
							.item

			//- SetupTable.mt-9

		v-tab-item(key="2").pa-5
			Uzel
</template>

<script>
import SetupTable from '@/components/SetupTable'
import Uzel from '@/components/Uzel'



export default {
	data () {
		return {
			conn1: [
				{ id: 0, name: 'Тестовая DVM', type: 'SQL' },
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
		setTab (e) {
			this.$store.commit('setTab', e)
		},
	},
	components: {
		SetupTable,
		Uzel,
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
	font-size: 1.2rem;
}
.mygrid {
	margin-top: 2rem;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(2, 1fr);
	align-items: start;
	.item {
		height: 100px;
	}

}
.v-expansion-panel--active > .v-expansion-panel-header {
	min-height: 64px;
	font-size: 1.3rem;
}
</style>
