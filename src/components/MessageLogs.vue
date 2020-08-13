<template lang="pug">
.pa-5
	.zag Очередь сообщений
	MessageTable(:headers="headers" :items="messages" :category="category")
</template>

<script>
import MessageTable from '@/components/MessageTable'
import {headers, messages} from '@/messages.js'

export default {
	data () {
		return {
			headers,
			messages,
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
