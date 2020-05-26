<template lang="pug">
.servers
	.zag Servers
	div
		vue-pipeline(:data="items")
</template>

<script>
// import { hue1 } from 'sample.js'

export default {
	data () {
		return {
			// items: hue,
		}
	},
	components: {
	},
}

</script>
