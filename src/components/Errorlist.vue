<template lang="pug">
.pa-5
	.zag Ошибки
	DataTable(:headers="headers" :items="notifications")

</template>

<script>
import DataTable from '@/components/DataTable'
import {headers, notifications} from '@/notifications.js'

export default {
	data () {
		return {
			headers,
			notifications,
		}
	},
	components: {
		DataTable,
	},
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */

</style>
