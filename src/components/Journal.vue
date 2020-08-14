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
			p.mt-2 Сообщение может быть обработано после снятия следующих блокировок:
			v-btn(depressed :disabled="list === 0" :dark="list !== 0" small color="orange" @click="modal = true" ).mb-3 Снять все блокировки
			table.tabs
				thead
					tr
						th Идентификатор объекта
						th Время блокировки
				tbody
					tr(v-for="num in list").ro
						td(@click="cell = true").pointer Дайджест SDF32-{{num}}53KSF-{{num.toString().length === 1 ? prefix : ''}}{{num}}
						td
							span 12.10.2020 &#9473; 15:{{num.toString().length === 1 ? prefix : ''}}{{num}}
							span.ic
								v-icon(color="#ccc") mdi-lock-outline
							span.action
								v-icon(color="teal") mdi-lock-open-variant-outline
					tr(v-show="list === 0")
						td(colspan="2")
							v-img(src="@/assets/img/nothing.svg" width="100").mx-auto.my-3
							p.text-center.blue-grey--text Ничего не найдено
					
		.one
			.zg
				v-icon(color="red").mr-3 mdi-alert-circle
				span  Ошибки
			p.mt-2 При обработке сообщения возникли следующие ошибки:
			v-btn(outlined small color="primary" style="visibility: hidden").mb-3 Экспорт в Excel
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

	v-dialog(v-model="modal" max-width="390")
		v-card
			v-card-title.headline Вы уверены?
			v-card-text Снятие всех блокировок может привести к непредсказуемым последствиям.
			v-card-text.font-weight-bold Могут пострадать котики и задания.
			v-card-actions
				v-spacer
				v-btn(text @click="modal = false" small) Отмена
				v-btn(color="orange" dark depressed @click="clear" small) Снять блокировки
</template>

<script>

export default {
	data () {
		return {
			id: false,
			prefix: 0,
			list: 55,
			modal: false,
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
	methods: {
		clear () {
			let that = this
			this.modal = false
			setTimeout(function() {
				that.list = 0
			}, 1000)
		},
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.tabs {
	margin-bottom: 1rem;
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
	min-width: 450px;
	margin: 1rem;
	.zg {
		font-size: 1.2rem;
		padding: .5rem 0;
		border-bottom: 1px solid orange;
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
