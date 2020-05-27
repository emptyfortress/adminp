<template lang="pug">
.servers
	.zag Servers
	div
		//- vue-pipeline(:data="items")
</template>

<script>
import { hue1 } from '@/components/sample.js'

export default {
	data () {
		return {
			items: hue1.nodes,
		}
	},
	components: {
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
