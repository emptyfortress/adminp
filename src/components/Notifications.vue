<template lang="pug">
.notific
	v-breadcrumbs(:items="breadcr")
	.zag Errors {{test}}
	Data(:headers="headers" :items="notifications")

</template>

<script>
import Data from '@/components/Data'
import {headers, notifications} from '@/notifications.js'

export default {
	data() {
		return {
			headers,
			notifications,
			breadcr: [
				{ text: 'Dashboard', disabled: false, href: '/' },
				{ text: 'Notifications', disabled: false, href: '/' },
				{ text: 'Errors', disabled: false, href: '/' },
			],
		}
	},
	components: {
		Data,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.notific {
	padding: 1rem;
	padding-top: 0;
}
</style>
