<template lang="pug">
v-navigation-drawer(v-model="add" stateless app right temporary width="40%" hide-overlay)
	p.text-center
		v-switch(v-model="$vuetify.theme.dark" color="primary" hide-details inset label="Theme Dark").d-inline-block

	.cen
		draggable(:list="widget1" group="people" draggable=".item" v-if="$route.path === '/'" ).myrow
			v-card(v-for="item in widget1" :key="item.i").item
				v-card-title {{ item.i }}

	br
	.cen
		draggable(:list="widget2" group="people" draggable=".item" v-if="$route.path === '/'" ).myrow
			v-card(v-for="item in widget2").item
				v-card-title {{ item.i }}
</template>

<script>
import draggable from 'vuedraggable'

export default {
	data () {
		return {
			order: 1
		}
	},
	computed: {
		add: {
			get () {
				return this.$store.getters.add
			},
			set () {}
		},
		widget1 () {
			return this.$store.getters.widget1
		},
		widget2 () {
			return this.$store.getters.widget2
		}
	},
	components: {
		draggable
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.item {
	width: 165px;
	height: 100px;
	margin: .25rem;
}
.vue-grid-item {
	display: flex;
	justify-content: center;
	align-items: center;
	.cardd {
		width: 100%;
		height: 100%;
		border-radius: .4rem;
		padding: 1rem;
	}
}
.myrow {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.cen {
	padding: 1rem;
	background: #ccc;
}

</style>
