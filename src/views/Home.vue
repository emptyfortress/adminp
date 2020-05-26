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
				grid-layout(:layout.sync="selected" :col-num="12" :row-height="30" :is-draggable="drag" :is-resizable="resize" :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true" )
					grid-item( v-for="item in selected" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" @resized="resizedEvent" ).item
						Widget(:item="item" :close="closeWidget" @remove="removeWidget")
		v-tab-item(v-for="(item,index) in panelItems" :key="index")
			.empt
				img(src="@/assets/img/nothing.svg")
				.headline.blue-grey--text Здесь довольно одиноко...
				.subtitle-1.blue-grey--text.mt-3 Я бы виджетов добавил :)
				br
				v-btn(text color="red darken-4" @click="delPanel(index)").mr-2 Удалить
		v-tab-item
			AddPanel(v-on:create="createPanel")
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import AddPanel from '@/components/AddPanel'
import Widget from '@/components/Widget'

export default {
	data() {
		return {
			drag: false,
			resize: false,
			closeWidget: false,
			tabs: 0,
			panels: [
				{ name: 'Моя панель' },
			],
			panelItems: [],
		}
	},
	computed: {
		selected() {
			return this.widget1
				.filter((item) => item.selected === true)
		},
		widget1() {
			return this.$store.getters.widget1
		},
	},
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem,
		AddPanel,
		Widget,
	},
	mounted() {
		window.addEventListener('keydown', this.setOn)
		window.addEventListener('keyup', this.setOff)
		this.filteredWidget = this.widget1
	},
	beforeDestroy() {
		window.removeEventListener('keydown', this.setOn)
		window.removeEventListener('keyup', this.setOff)
	},
	methods: {
		setOn(event) {
			if (event.keyCode === 18) {
				this.drag = true
				this.resize = true
				this.closeWidget = true
			}
		},
		setOff(event) {
			if (event.keyCode === 18) {
				this.drag = false
				this.resize = false
				this.closeWidget = false
			}
		},
		removeWidget(e) {
			this.drag = false
			this.resize = false
			this.closeWidget = false
			const temp = []
			this.widget1.map((item) => {
				if (item.id === e) {
					item.selected = !item.selected
					temp.push(item)
				} else {
					temp.push(item)
				}
			})
			this.$store.commit('updateWidget1', temp)
		},
		createPanel(e) {
			this.panels.push({
				name: e,
			})
			this.tabs = this.panels.length
			this.panelItems.push({
				name: e,
			})
		},
		delPanel(e) {
			const t = e + 1
			this.panels.splice(t, 1)
			this.panelItems.splice(e, 1)
		},
		resizedEvent(i, newH, newW, newHPx, newWPx) {
			console.log(`RESIZED i=${i}, H=${newH}, W=${newW}, H(px)=${newHPx}, W(px)=${newWPx}`)
		},
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
@import '@/assets/css/palette.scss';

.vue-grid-item {
	display: flex;
	justify-content: center;
	align-items: center;
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
