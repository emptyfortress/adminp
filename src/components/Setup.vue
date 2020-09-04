<template lang="pug">
.pa-5
	.zag Настройки
	v-tabs(centered).cardtabs
		v-tab(key="1") Общие
		v-tab(key="2") Worker service
		v-tab-item(key="1").pa-5
			.d-flex.justify-between
				.inf
					v-icon(color="link").mr-2 mdi-information-outline
					| Подключение к адресу настроек:
					span https://localhost:8080/api
				v-spacer
				v-btn(fab color="pink" dark small)
					v-icon mdi-plus

 
		v-tab-item(key="1")
			p testtest
</template>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.inf {
	span {
		color: $link;
		margin-left: 1rem;
	}

}

</style>
