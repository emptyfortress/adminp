<template lang="pug">
.pa-5
	.zag Настройки
	v-tabs(centered v-model="tabs").cardtabs
		v-tab(key="1" @click="setTab(0)") Общие
		v-tab(key="2" @click="setTab(1)") Worker service
		v-tab-item(key="1").pa-5
			.d-flex.justify-space-between.align-center
				.zg Соединения
				.inf
					v-icon(color="link").mr-2 mdi-information-outline
					| Подключение к адресу настроек:
					span https://localhost:8080/api
			SetupTable.mt-2

		v-tab-item(key="2").pa-5
			Uzel
</template>

<script>
import SetupTable from '@/components/SetupTable'
import Uzel from '@/components/Uzel'



export default {
	data () {
		return {
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

</style>
