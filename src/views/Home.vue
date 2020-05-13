<template lang="pug">
div
	v-tabs(centered v-model="tabs").mytabs
		v-tab Моя панель
		v-tab(v-for="item in panels" :key="item.name") {{  item.name  }}
		v-tab
			v-icon mdi-plus
	v-tabs-items(v-model="tabs")
		v-tab-item
			.dash
				grid-layout(:layout.sync="widget1" :col-num="12" :row-height="30" :is-draggable="drag" :is-resizable="resize" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true" )
					grid-item( v-for="item in widget1" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" ).item
						v-card.cardd
							.hd(v-if="item.text.length") {{ item.text }}
							.hd(v-else) Widget {{ item.i }}
							.badge 25
							.test
				ul
					li(v-for="n in 50") laksjlka
		v-tab-item
			h2 Add
</template>

<script>
import VueGridLayout from 'vue-grid-layout'

export default {
	data () {
		return {
			drag: false,
			resize: false,
			tabs: 0,
			panels: []
		}
	},
	computed: {
		widget1 () {
			return this.$store.getters.widget1.filter((item) => item.selected === true)
		}
	},
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem
	},
	mounted () {
		window.addEventListener('keydown', this.setOn)
		window.addEventListener('keyup', this.setOff)
	},
	beforeDestroy () {
		window.removeEventListener('keydown', this.setOn)
		window.removeEventListener('keyup', this.setOff)
	},
	methods: {
		setOn (event) {
			if (event.keyCode === 18) {
				this.drag = true
				this.resize = true
			}
		},
		setOff (event) {
			if (event.keyCode === 18) {
				this.drag = false
				this.resize = false
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
@import '@/assets/css/palette.scss';

.vue-grid-item {
	display: flex;
	justify-content: center;
	align-items: center;
	.cardd {
		width: 100%;
		height: 100%;
		border-radius: .4rem;
		padding: 1rem;
		position: relative;
	}
}
.badge {
	position: absolute;
	right: 1rem;
	top: 1rem;
	background: $info;
	padding: .2rem .5rem;
	color: #fff;
	border-radius: 3rem;
}
.v-tabs-items {
	padding: 1rem;

}
</style>
