<template lang="pug">
.widg
	v-select(:items="database" v-model="d1" prepend-icon="mdi-database" dense placeholder="Database" ).dtb
	img(src="@/assets/img/disconnected.svg" v-show="d1.length === 0")
</template>

<script>

export default {
	props: ['database', 'model'],
	data () {
		return {
			d1: [],
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';


</style>
