<template lang="pug">
.pa-5
	.zag.mb-5 Ошибки
	Datatable(:headers="headers" :items="notifications")


</template>

<script>
import Datatable from '@/components/Datatable'
import {headers, notifications} from '@/notifications.js'

export default {
	data () {
		return {
			headers,
			notifications,
		}
	},
	components: {
		Datatable,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';


</style>
