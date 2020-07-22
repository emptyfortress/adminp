<template lang="pug">
v-row(align="center")
	v-breadcrumbs(:items="breadcrumbs")
	v-btn(icon @click="buffer = true").ml-5
		v-icon(small color="info") mdi-link-variant
	v-snackbar(v-model="buffer" absolute color="success" timeout="2000" top) Полный путь скопирован в буфер обмена 
</template>

<script>

export default {
	data () {
		return {
			buffer: false,
		}
	},
	computed: {
		breadcrumbs () {
			return this.$route.meta.breadcrumbs
		},
	},
}

</script>
