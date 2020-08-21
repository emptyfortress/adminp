<template lang="pug">
.pa-5
	.zag
		v-icon(x-large color="#999").mr-3 mdi-inbox-arrow-up-outline
		span Очередь исходящих сообщений
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

</style>
