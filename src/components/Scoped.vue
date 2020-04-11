<template lang="pug">
div
	ul
		li(v-for="user in users")
			slot(:user="user")
				span {{ user.first }}
	slot(name="footer") stop
</template>

<script>

export default {
	data () {
		return {
			users: [
				{ first: 'one', last: 'two' },
				{ first: 'one', last: 'two' },
				{ first: 'one', last: 'two' },
				{ first: 'one', last: 'two' },
				{ first: 'one', last: 'two' },
				{ first: 'one', last: 'two' }
			]
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
