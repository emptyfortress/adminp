<template lang="pug">
v-row(align="center")
	v-breadcrumbs(:items="breadcrumbs")
	v-btn(icon @click="buffer = true").ml-5
		v-icon(small color="info") mdi-link-variant
	v-snackbar(v-model="buffer" absolute color="teal" :timeout="timeout" top) Путь скопирован!
</template>

<script>

export default {
	data () {
		return {
			buffer: false,
			timeout: 2000,
		}
	},
	computed: {
		breadcrumbs () {
			return this.$route.meta.breadcrumbs
		},
	},
}

</script>
