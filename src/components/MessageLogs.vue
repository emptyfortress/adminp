<template lang="pug">
.pa-5
	.zag Очередь сообщений
	MessageTable(:headers="headers" :items="messages")
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
}

</script>
