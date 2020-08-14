<template lang="pug">
table.noborder
	tr
		td.attr Вид:
		td Задание на исполнение
		td [Object ID]
	tr
		td.attr Дайждест:
		td Подготовьте отчет за 3 квартал.
		td [Some ID]
	tr
		td.attr Целевой сервис обработки:
		td Backoffice
		td [Main info type ID]
	tr
		td.attr Подключенная БД:
		td DVM тестовая
		td 

</template>

<style scoped lang="scss">
td {
	border: none;
	font-size: 1.0rem;
	padding: .2rem .5rem;
	color: black;
}
.attr {
	text-align: right;
	color: #999;
}


</style>
