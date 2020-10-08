<template lang="pug">
.block(:class="{edi: edited}")
	.process
		table.sm
			tr
				td.zg
					.bullet
					span Процесс
				td.lnk BackOffice_Docsvision55_ExchContent66
			tr
				td Тип конфигурации
				td
					v-select(:items="sel" value="BackOffice сервис обработки заданий" dense hide-details @change="pushSelected").sel
		div
			v-btn(icon small)
				v-icon mdi-restart
			v-btn(icon small) 
				v-icon mdi-trash-can-outline
	.bottom
		.left
			table.sm
				tr
					td Соединение Docsvision
					td 
						v-select(:items="sel1" dense value="Connect55" @change="pushSelected")
				tr
					td Соединение Exchange
					td
						v-select(:items="sel1" dense value="Connect66" @change="pushSelected")

		.right
			v-checkbox(label="Отключено" dense v-model="selected" value="1")
			.move Тайм-аут 0x000fd3400AA (10 0000)
			.d-flex
				v-checkbox(label="x86" dense hide-details v-model="selected" value="2").mr-5
				v-checkbox(label="x64" dense hide-details v-model="selected" value="3")
	v-card-actions(v-show="edited")
		v-spacer
		v-btn(text color small @click="edited = false") Отмена
		v-btn(depressed small @click="edited = false" color="primary") Сохранить

</template>

<script>

export default {
	data() {
		return {
			edited: false,
			selected: [],
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
		}
	},
	methods: {
		pushSelected () {
			this.selected.push(1)
		},
	},
	watch: {
		selected:  {
			deep: true,
			handler () {
				if (this.selected.length > 0) {
					this.edited = true
				} else this.edited = false
			},
		},
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.block {
	margin-top: 1rem;
	border-top: 1px solid #ccc;
	transition: .5s all ease;
	&.edi {
		border: 1px dashed red;
	}
}

.process {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 1rem 0;
}
.sm {
	font-size: .9rem;
	td {
		padding: 3px 15px 3px 0;
	}
}
.zg {
	font-weight: bold;
}
.theme--light .zg {
	color: black;
}
.bullet {
	width: 15px;
	height: 15px;
	display: inline-block;
	margin-right: .3rem;
	background: $yellow;
	border-radius: 15px;
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
.move {
	margin-top: -1rem;
	margin-bottom: 0.9rem;
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
</style>
