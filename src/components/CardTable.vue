<template lang="pug">
table.noborder
	tr
		td.attr Вид:
		td Задание на исполнение
		td(v-show="id" @click="$emit('snack')").dark [CF34-879A-45AVB]
	tr
		td.attr Дайждест:
		td Подготовьте отчет за 3 квартал.
		td(v-show="id" @click="$emit('snack')").dark [UI89-RTD2-345Q]
	//- tr
	//- 	td.attr Целевой сервис обработки:
	//- 	td Backoffice
	//- 	td(v-show="id" @click="$emit('snack')").dark [54KJ-PLMN-345Q]
	tr
		td.attr Соединение DV:
		td Current55
		td

</template>

<script>

export default {
	props: ['id'],
	data () {
		return {
		}
	},
}

</script>

<style scoped lang="scss">
td {
	border: none;
	font-size: 1.0rem;
	padding: .2rem .5rem;
	/* color: black; */
}
.attr {
	text-align: right;
	color: #999;
	padding-right: 1rem;
}
.dark {
	padding: 0 1rem;
	background: #555;
	color: #eee;
}


</style>
