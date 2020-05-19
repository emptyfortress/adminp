<template lang="pug">
	v-breadcrumbs(:items="breadcr")
</template>

<script>

export default {
	data () {
		return {
			breadcr: [
				{ text: 'Главная', disabled: false, href: '/' },
				{ text: 'Notifications', disabled: true, href: '' },
			],
		}
	},
}

</script>
