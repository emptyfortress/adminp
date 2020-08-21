<template lang="pug">
.pa-5
	v-select(:items="bd" label="База данных").small
	.zag
		v-icon(x-large color="#999").mr-3 mdi-inbox-arrow-down-outline
		span Очередь входящих сообщений
	MessageTable(:headers="headers" :items="messages" :category="category")
</template>

<script>
import MessageTable from '@/components/MessageTable'
import {headers, messages} from '@/messages.js'

export default {
	props: ['type'],
	data () {
		return {
			headers,
			messages,
			bd: [
				'тестовая',
				'производство',
				'DB1',
				'DB 2',
			],
		}
	},
	components: {
		MessageTable,
	},
	computed: {
		category () {
			let ar = [ 'Группа заданий', 'Задания', 'Согласования', 'Почта ГЗ', 'Почта заданий', 'Почта согласований']
			return ar.indexOf(this.$route.params.category)
		},
	},
}

</script>

<style scoped lang="scss">
.small {
	width: 300px;
	margin: 0 auto;
	position: absolute;
	top: 1rem;
	right: 1rem;
}
</style>
