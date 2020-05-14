<template lang="pug">
div
	v-tabs(centered v-model="tabs").mytabs
		v-tab(v-for="(item, index) in panels" :key="index") {{  item.name  }}
		v-tab
			v-icon mdi-plus
	v-tabs-items(v-model="tabs")
		v-tab-item
			.dash
				v-btn(icon)
					v-icon mdi-tune
				v-btn(icon)
					v-icon mdi-pencil
				grid-layout(:layout.sync="widget1" :col-num="12" :row-height="30" :is-draggable="drag" :is-resizable="resize" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true" )
					grid-item( v-for="item in widget1" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" ).item
						v-card.cardd
							.hd(v-if="item.text.length") {{ item.text }}
							.hd(v-else) Widget {{ item.i }}
							.badge 25
							.test
		v-tab-item(v-for="(item,index) in panelItems" :key="index")
			.empt
				img(src="@/assets/img/nothing.svg")
				.headline Здесь довольно одиноко...
				.subtitle-1.mt-3 Я бы виджетов добавил :)
				br
				v-btn(text color="primary").mr-2 Переименовать
				v-btn(text color="red darken-4" @click="delPanel(index)").mr-2 Удалить
		v-tab-item
			AddPanel(v-on:create="createPanel")
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import AddPanel from '@/components/AddPanel'

export default {
	data () {
		return {
			drag: false,
			resize: false,
			tabs: 0,
			panels: [
				{ name: 'Моя панель' }
			],
			panelItems: []
		}
	},
	computed: {
		widget1 () {
			return this.$store.getters.widget1.filter((item) => item.selected === true)
		}
	},
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem,
		AddPanel
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
		},
		createPanel (e) {
			this.panels.push({
				name: e
			})
			this.tabs = this.panels.length
			this.panelItems.push({
				name: e
			})
		},
		delPanel (e) {
			let t = e + 1
			this.panels.splice(t, 1)
			this.panelItems.splice(e, 1)
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
	background: $link;
	padding: .2rem .5rem;
	color: #fff;
	border-radius: 3rem;
}
.v-tabs-items {
	padding: 1rem;
}
.theme--dark.v-tabs-items {
	background: transparent;
}
.empt {
	margin-top: 2rem;
	text-align: center;
}

</style>
