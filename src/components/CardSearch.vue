<template lang="pug">
.pa-5
	.zag Сообщения карточки {{ $route.params }}
	v-row(justify="space-between" align="center").px-3
		v-btn(outlined color="primary") Показать все ID
		v-col(cols="12" sm="3")
			v-text-field(v-model="filter" label="Card ID" prepend-inner-icon="mdi-magnify" clearable single-line)
	table.tabs
		thead
			tr
				th Входящие ссылки
				th Текущая карточка
				th Исходящие ссылки
</template>
