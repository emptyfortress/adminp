<template lang="pug">
.vuetest
	h3 vuetest
	v-text-field(v-model="email")
	v-switch(v-model="recieve" :label="recieve.toString()")
	p Get emails - {{ recieve }}
</template>

<script>

export default {
	data () {
		return {
			email: '',
			recieve: false

		}
	}
}

</script>

<style scoped lang="scss">
.vuetest {
	margin: 4rem;
}

</style>
