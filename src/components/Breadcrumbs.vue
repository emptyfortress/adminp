<template lang="pug">
v-breadcrumbs(:items="breadcrumbs")
</template>

<script>

export default {
	data () {
		return {
		}
	},
	computed: {
		breadcrumbs () {
			return this.$route.meta.breadcrumbs
		},
	},
}

</script>
