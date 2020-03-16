<template lang="pug">
v-navigation-drawer(v-model="add" stateless app right temporary width="40%" )
	p.text-center
		v-switch(v-model="$vuetify.theme.dark" color="primary" hide-details inset label="Theme Dark").d-inline-block

	grid-layout(:layout.sync="layout" :col-num="12" :row-height="30" :is-draggable="drag" :is-resizable="resize" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true" )
		grid-item( v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" )
			v-card.cardd
				.hd Widget {{ item.i }}

	//- v-row
	//- 	v-col(v-for="k in 3" :key="k")
	//- 		vue-draggable-resizable(:x="0" :y="0" :w="100" :h="100" @dragging="onDrag" :parent="true" class-name="drag" ).elevation-5
	//- 			v-card
	//- 				v-card-title {{ k }}

</template>

<script>
import VueGridLayout from 'vue-grid-layout'
// import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
	data () {
		return {
			drag: true,
			resize: false,
			layout: [
				{ 'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0' },
				{ 'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '1' },
				{ 'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2' }
			]
		}
	},
	computed: {
		add: {
			get () {
				return this.$store.getters.add
			},
			set () {}
		}

	},
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem
	}
	// components: {
	// 	VueDraggableResizable
	// }
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

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

</style>
