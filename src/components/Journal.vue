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
				td 12.10.2020 &#9473; 15:34
				td.tder
					v-icon(color="red").mr-1 mdi-alert-circle
					v-icon(color="red").mr-2 mdi-lock-outline
					span Ошибка, Блокировано
				td Почта ГЗ
				td Подготовьте отчет за 1 квартал
				td Отправлено исполнителям
				td
					span.mr-3 12.10.2020 &#9473; 15:41
					v-btn(depressed color="pink" dark x-small) Изменить
	.d-flex.flex-wrap.justify-center
		.one
			.zg 
				v-icon(color="orange").mr-3 mdi-lock-outline
				span Блокировки
			p Сообщение может быть обработано после снятия следующих блокировок:
			v-btn(depressed dark small color="orange").mb-3 Снять все блокировки
			table.tabs
				thead
					tr
						th Идентификатор объекта
						th Время блокировки
				tbody
					tr(v-for="num in 55").ro
						td(@click="cell = true").pointer Дайджест SDF32-{{num}}53KSF-{{num.toString().length === 1 ? prefix : ''}}{{num}}
						td
							span 12.10.2020 &#9473; 15:{{num.toString().length === 1 ? prefix : ''}}{{num}}
							span.ic
								v-icon(color="#ccc") mdi-lock-outline
							span.action
								v-icon(color="teal") mdi-lock-open-variant-outline

					
		.one
			.zg
				v-icon(color="red").mr-3 mdi-alert-circle
				span  Ошибки
			p При обработке сообщения возникли ошибки:
			table.tabs
				thead
					tr
						th Error message
						th Дата записи
				tbody
					template(v-for="num in 35")
						tr.ro
							td 
								v-icon(color="#ccc").mr-2 mdi-alert-circle-outline
								span Недостаточно прав для совершения операции
							td 12.10.2020 &#9473; 15:{{num.toString().length === 1 ? prefix : ''}}{{num}}
						tr.ro
							td 
								v-icon(color="#ccc").mr-2 mdi-alert-circle-outline
								span Процедура ссылается на несуществующий объект
							td 12.10.2020 &#9473; 15:{{num.toString().length === 1 ? prefix : ''}}{{num}}

</template>

<script>

export default {
	data () {
		return {
			id: false,
			prefix: 0,
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

.tabs {
	margin-bottom: 2rem;
}
.id {
	font-size: 0.7rem;
	height: 32px;
	background: #555;
	color: #eee;
	td {
		cursor: pointer;
	}
}
.one {
	/* width: 600px; */
	min-width: 450px;
	/* max-width: 850px; */
	margin: 1rem;
	.zg {
		font-size: 1.2rem;
	}
}
.theme--light .zg {
	color: #333;
}
.action {
	width: 50px;
}
.ic {
	float: right;
	margin-right: 2px;
}

</style>
