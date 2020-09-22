<template lang="pug">
.wr
	v-card.all
		.d-flex
			v-card-title.headline.mb Узел Worker Service 1
			v-spacer
			v-btn(text color="primary" @click="dialog = !dialog") Подключить процесс
		v-card-text
			table.sm
				tr
					td LogFile:
					td.lnk C:/Program Files/Docsvision/Logs
				tr
					td LogTraceLevel:
					td 4
			.process
				table.sm
					tr
						td.zg Рабочий процесс
						td.lnk BackOffice_Docsvision55_ExchContent66
					tr
						td Конфигурация
						td
							v-select(:items="sel" value="BackOffice сервис обработки заданий" dense hide-details).sel
				div
					v-btn(depressed small)
						v-icon mdi-restart
						span IIS
					v-btn(icon small) 
						v-icon mdi-trash-can-outline
			.bottom
				.left
					table.sm
						tr
							td Соединение Docsvision
							td 
								v-select(:items="sel1" dense value="Connect55")
						tr
							td Соединение Exchange
							td
								v-select(:items="sel1" dense value="Connect66")

				.right
					v-checkbox(label="Отключено" dense)
					.move Тайм-аут 0x000fd3400AA (10 0000)
					.d-flex
						v-checkbox(label="x86" dense hide-details).mr-5
						v-checkbox(label="x64" dense hide-details)
			.process
				table.sm
					tr
						td.zg Рабочий процесс
						td.lnk BackOffice_Docsvision55_ExchContent66
					tr
						td Конфигурация
						td
							v-select(:items="sel" value="BackOffice сервис обработки заданий" dense hide-details).sel
				div
					v-btn(depressed small)
						v-icon mdi-restart
						span IIS
					v-btn(icon small) 
						v-icon mdi-trash-can-outline
			.bottom
				.left
					table.sm
						tr
							td Соединение Docsvision
							td 
								v-select(:items="sel1" dense value="Connect55")
						tr
							td Соединение Exchange
							td
								v-select(:items="sel1" dense value="Connect66")

				.right
					v-checkbox(label="Отключено" dense)
					.move Тайм-аут 0x000fd3400AA (10 0000)
					.d-flex
						v-checkbox(label="x86" dense hide-details).mr-5
						v-checkbox(label="x64" dense hide-details)
		
	v-card.all
		.d-flex
			v-card-title.headline.mb Узел Worker Service 2
			v-spacer
			v-btn(text color="primary" @click="dialog = !dialog") Подключить процесс
		v-card-text
			table.sm
				tr
					td LogFile:
					td.lnk C:/Program Files/Docsvision/Logs
				tr
					td LogTraceLevel:
					td 4
			.process
				table.sm
					tr
						td.zg Рабочий процесс
						td.lnk BackOffice_Docsvision55_ExchContent66
					tr
						td Конфигурация
						td
							v-select(:items="sel" value="BackOffice сервис обработки заданий" dense hide-details).sel
				div
					v-btn(depressed small)
						v-icon mdi-restart
						span IIS
					v-btn(icon small) 
						v-icon mdi-trash-can-outline
			.bottom
				.left
					table.sm
						tr
							td Соединение Docsvision
							td 
								v-select(:items="sel1" dense value="Connect55")
						tr
							td Соединение Exchange
							td
								v-select(:items="sel1" dense value="Connect66")

				.right
					v-checkbox(label="Отключено" dense)
					.move Тайм-аут 0x000fd3400AA (10 0000)
					.d-flex
						v-checkbox(label="x86" dense hide-details).mr-5
						v-checkbox(label="x64" dense hide-details)

	v-dialog(v-model="dialog" persistent max-width="450")
		v-card
			v-card-title( class="headline" ) Подключить процесс
			v-card-text Здесь параметры
			v-form.px-5
				v-text-field(label="Название")
				v-text-field(label="Конфигурация")
			v-card-text Здесь еще параметры
			v-card-actions
				v-spacer
				v-btn( color="primary" text @click="dialog = false" )  Отмена
				v-btn( color="primary" text @click="dialog = false" )  Сохранить
</template>


<script>

export default {
	data: () => ({
		dialog: false,
		sel: [
			'BackOffice сервис обработки заданий',
			'BackOffice сервис обработки ГЗ',
			'BackOffice сервис обработки почты',
			'BackOffice сервис обработки согласований',
		],
		sel1: [
			'Connect55',
			'Connect66',
		],
		
	}),
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.wr {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
.all {
	flex-basis: 600px;
	flex-shrink: 1;
	flex-grow: 1;
	padding: 1rem;
}
.sm {
	font-size: .9rem;
	td {
		padding: 3px 15px 3px 0;
	}
}
.log {
	font-size: .7rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 4px 10px;
	background: $grey;
	display: inline-block;
}
.process {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	flex-wrap: wrap;
	border-top: 1px solid #ccc;
	margin-top: 2rem;
	padding: 1rem 0;
}
.zg {
	font-weight: bold;
}
.theme--light .zg {
	color: black;
}
.sel {
	width: 300px;
	font-size: .9rem;
	height: 36px;
	margin: 0;
}
.bottom {
	display: flex;
	gap: 1rem;
	> div {
		padding: 1rem;
		border-radius: 6px;
	}
	.v-select {
		font-size: .9rem;
		height: 36px;
		margin: 0;
		width: 150px;
	}
}
.theme--light .bottom > div {
	background: #eee;
}
.theme--dark .bottom > div {
	background: #555;
}

.v-input--selection-controls.v-input .v-label {
	font-size: .9rem;
}
.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
	margin: 0;
}
.v-input.v-input--dense.theme--light.v-input--selection-controls.v-input--checkbox {
	margin: 0;
}
.move {
	margin-top: -1rem;
	margin-bottom: 0.9rem;


}

</style>
