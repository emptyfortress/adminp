<template lang="pug">
.vuetest
	h2 vuetest
	Scoped
		template(v-slot="{user}")
			|{{user.last}}
		template(v-slot:footer)
			|onoter
</template>

<script>
import Scoped from '@/components/Scoped'

export default {
	data () {
		return {
		}
	},
	components: {
		Scoped
	}
}

</script>

<style scoped lang="scss">
.vuetest {
	margin: 3rem;
}

</style>
