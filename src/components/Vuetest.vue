<template lang="pug">
.vuetest
	h3 vuetest
	v-text-field(v-model="email")

	//- Switchmy(v-model="rec")

	p Get emails - {{ rec }} {{ email }}
	v-switch(v-model="rec" :label="rec.toString()" )
</template>

<script>
import Switchmy from '@/components/Switchmy'

export default {
	data () {
		return {
			email: '',
			rec: true
		}
	},
	components: {
		Switchmy
	}
}

</script>

<style scoped lang="scss">
.vuetest {
	margin: 4rem;
}

</style>
