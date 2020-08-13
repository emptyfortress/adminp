<template lang="pug">
.pa-5
	v-snackbar(v-model="cell" absolute color="teal" :timeout="timeout" top) ID скопирован!
	.zag Журнал ошибок и блокировок
	.d-flex.mb-3
		v-btn(depressed outlined small color="primary" @click="id = !id") Показать все ID
		v-spacer
		v-btn(depressed outlined color="pink" small) Изменить дату активации
	table.tabs
		thead
			tr
				th(v-for="header in headers") {{ header.text }}
		tbody
			tr(v-show="id" @click="cell = true").id
				td DF345-SDF32-53KSF-ADFL3-LKJ98
				td DF345-SDF32-53KSF
				td DF345-SDF32-53KSF
				td DF345-SDF32-53KSF
				td DF345-SDF32-53KSF
				td DF345-SDF32-53KSF
				td DF345-SDF32-53KSF
			tr.ro
				td DF345-SDF32-53KSF-ADFL3-LKJ98
				td 12.10.2020 -- 15:34
				td.tder
					v-icon(color="red").mr-1 mdi-alert-circle
					v-icon(color="red").mr-2 mdi-minus-circle-outline
					span Ошибка, Блокировано
				td Почта ГЗ
				td Подготовьте отчет за 1 квартал
				td Отправлено исполнителям
				td
					span.mr-3 12.10.2020 -- 15:41
					v-btn(depressed color="pink" dark x-small) Изменить
</template>

<script>

export default {
	data () {
		return {
			id: false,
			headers: [
				{text: 'ID входящего сообщения'},
				{text: 'Дата создания'},
				{text: 'Состояние'},
				{text: 'Сервис обработки'},
				{text: 'Тип сообщения'},
				{text: 'Событие'},
				{text: 'Дата активации сообщения'},
			],
			cell: false,
			timeout: 2000,
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.id {
	font-size: 0.7rem;
	height: 32px;
	background: #555;
	color: #eee;
	td {
		cursor: pointer;
	}
}

</style>
