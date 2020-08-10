<template lang="pug">
.widg
	v-select(:items="database" v-model="d1" prepend-icon="mdi-database" dense placeholder="Database" ).dtb
	img(src="@/assets/img/disconnected.svg" v-if="d1.length === 0")
	div(v-else).clas
		div(v-show="num === 0") one
		div(v-show="num === 1") two
		div(v-show="num === 2") three
</template>

<script>

export default {
	props: ['database', 'num'],
	data () {
		return {
			d1: [],
		}
	},
}

</script>

<style scoped lang="scss">

</style>
