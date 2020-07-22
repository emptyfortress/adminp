<template lang="pug">
.pa-5
	.zag Последние действия
	LogTable(:headers="headers" :items="actions")
</template>

<script>
import LogTable from '@/components/LogTable'
import {headers, actions} from '@/actions.js'

export default {
	data () {
		return {
			headers,
			actions,
		}
	},
	components: {
		LogTable,
	},
}

</script>

<style scoped lang="scss">


</style>
