<template lang="pug">
.dash
	grid-layout(:layout.sync="firstWidgets" :col-num="12" :row-height="30" :is-draggable="drag" :is-resizable="resize" :is-mirrored="false" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true" )
		grid-item( v-for="item in firstWidgets" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.id" @resized="resizedEvent" ).item
			v-card.cardd
				.text--primary.text-uppercase(@click="$router.push(item.url)") {{ item.text }}
				// .tit(@click="$router.push(item.url)") {{ item.text }}
				//- .badge(v-if="item.badge") {{ item.badge }}
				v-btn(icon small v-show="closeWidget" @click="remove(item.id)").reload
					v-icon(small) mdi-reload
				v-btn(icon small v-show="closeWidget" @click="remove(item.id)").setup
					v-icon(small) mdi-nut
				v-btn(icon small v-show="closeWidget" @click="remove(item.id)").close
					v-icon(small) mdi-close
				WidgGraph(:database='database').dtb


</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import WidgGraph from '@/components/WidgGraph'

export default {
	data () {
		return {
			drag: false,
			resize: false,
			closeWidget: false,
			firstWidgets: [
				{ id: 0, url: '/notifications/errorlist', badge: 5, 'x': 1, 'y': 0, 'w': 3, 'h': 4, 'i': '0', selected: true, text: 'Очередь сообщений' },
				{ id: 1, url: '/notifications/errorlist', badge: 9, 'x': 4, 'y': 0, 'w': 3, 'h': 4, 'i': '1', selected: true, text: 'Поиск сообщений' },
				{ id: 2, url: '/notifications/errorlist', badge: 9, 'x': 7, 'y': 0, 'w': 3, 'h': 4, 'i': '1', selected: true, text: 'Загрузка процессов' },
			],
			database: ['DVM тестовая', 'База 1', 'База 2','SQL big','Postgress'],
			d1: [],
		}
	},
	computed: {
	},
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem,
		WidgGraph,
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
		resizedEvent(i, newH, newW, newHPx, newWPx) {
			console.log(`RESIZED i=${i}, H=${newH}, W=${newW}, H(px)=${newHPx}, W(px)=${newWPx}`)
		},
	},
}

</script>
<style scoped lang="scss">
@import '@/assets/css/colors.scss';


.dash {
	padding: 2rem;
}
.cardd {
	width: 100%;
	// height: 100%;
	border-radius: .4rem;
	padding: 1rem;
	position: relative;
	overflow: hidden;
}
.badge {
	position: absolute;
	left: 1rem;
	top: 1rem;
	background: $link;
	padding: .2rem .5rem;
	color: #fff;
	border-radius: 3rem;
}
.close {
	position: absolute;
	top: -5px;
	right: -5px;
}
.tit {
	cursor: pointer;
	font-size: 1.1rem;
	&:hover {
		text-decoration: underline;
		
	}
}
.reload {
	position: absolute;
	top: -5px;
	right: 2.5rem;
}
.setup {
	position: absolute;
	top: -5px;
	right: 1rem;
}
.dtb {
	width: 200px;
}
</style>
