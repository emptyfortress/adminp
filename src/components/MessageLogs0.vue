<template lang="pug">
.pa-5
	.zag
		v-icon(x-large color="#999").mr-3 mdi-inbox-arrow-up-outline
		span Очередь исходящих сообщений
		v-select(:items="bd" label="База данных").small
	v-btn(outlined small color="primary") Показать все ID
	MessageOut(:headers="headersout" :items="messages" :category="category")
</template>

<script>
import MessageOut from '@/components/MessageOut'
import {headersout, messages} from '@/messages.js'

export default {
	props: ['type'],
	data () {
		return {
			headersout,
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
		MessageOut,
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
	width: 200px;
	display: inline-block;
	margin-left: 2rem;
	transform: translateY(-9px);
}

</style>
