<template lang="pug">
.wr
	v-card.all
		.d-flex
			v-card-title.headline.mb 
				v-icon(size="26" color="green").mr-3 mdi-circle-slice-8
				span {{ uzel }} 1
			v-spacer
			v-btn(icon)
				v-icon mdi-reload
		v-card-text
			table.sm
				tr
					td LogFile:
					td.lnk C:/Program Files/Docsvision/Logs
				tr
					td LogTraceLevel:
					td 4
			.d-flex.align-center.justify-space-between.mt-3
				v-edit-dialog
					span.my {{ uzel }} 1
					template( v-slot:input )
						v-text-field(v-model="uzel" label="Edit" single-line)
				.proc Всего процессов: 2
				v-btn(small color="primary" depressed @click="dialog = !dialog") Подключить процесс

			Process
			Process
		
	v-card.all
		.d-flex
			v-card-title.headline.mb
				v-icon(size="26" color="red").mr-3 mdi-circle-slice-8
				span {{ uzel }} 2
			v-spacer
			v-btn(icon)
				v-icon mdi-reload
		v-card-text
			table.sm
				tr
					td LogFile:
					td.lnk C:/Program Files/Docsvision/Logs
				tr
					td LogTraceLevel:
					td 4
			.d-flex.align-center.justify-space-between.mt-3
				.proc Всего процессов: 1
				v-btn(small color="primary" depressed @click="dialog = !dialog").mt-3 Подключить процесс

			Process

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
import Process from '@/components/Process'

export default {
	data: () => ({
		dialog: false,
		uzel: 'Узел Worker Service',
	}),
	components: {
		Process,
	},
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
.log {
	font-size: .7rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 4px 10px;
	background: $grey;
	display: inline-block;
}
.proc {
	font-size: 0.8rem;
	background: $yellow;
	padding: 3px 10px;
	border-radius: 32px;
	color: #000;
}
.my {
	color: $link;
	font-size: 1.0rem;
}

</style>
