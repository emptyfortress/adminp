<template lang="pug">
.dash
	grid-layout(:layout.sync="widgets" :col-num="12" :row-height="30" :is-draggable="drag" :is-resizable="resize" :is-mirrored="false" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true" )
		grid-item( v-for="item in widgets" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.id" @resized="resizedEvent" ).item
			v-card.cardd
				.date(v-show="closeWidget") 3 мин назад
				v-btn(icon small v-show="closeWidget" @click="remove(item.id)").reload
					v-icon(small) mdi-reload
				v-btn(icon small v-show="closeWidget" @click="remove(item.id)").setup
					v-icon(small) mdi-nut
				v-btn(icon small v-show="closeWidget" @click="removeWidget(item.id)").close
					v-icon(small) mdi-close
				div(v-if="item.setup")
					.myrow
						.tit {{ item.text }}
						.dtb
							v-select(:items="database" v-model="item.mod" prepend-icon="mdi-database" dense placeholder="Database")
					img(src="@/assets/img/disconnected.svg" v-if="item.mod.length === 0").discon
					WidgGraph(:database='database' :num="item.id" v-else).gra
				div(v-else)
					p laksjd

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
			widgets: [
				{ id: 0, url: '/notifications/errorlist', mod: [], 'x': 1, 'y': 0, 'w': 7, 'h': 9, 'i': '0', setup: true, text: 'Очередь сообщений' },
				{ id: 1, url: '/notifications/errorlist', mod: [], 'x': 1, 'y': 8, 'w': 7, 'h': 9, 'i': '1', setup: false, text: 'Загрузка Service Workers' },
				{ id: 2, url: '/notifications/errorlist', mod: [], 'x': 8, 'y': 0, 'w': 3, 'h': 18, 'i': '2', setup: false, text: 'Поиск сообщений' },
			],
			filteredWidget: [],
			database: ['DVM тестовая', 'База 1', 'База 2', 'SQL big','Postgress'],
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
		this.filteredWidget = this.widgets
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
			let temp = []
			this.widgets.map((item) => {
				if (item.id !== e) {
					temp.push(item)
				}
				this.widgets = temp
			})
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
	height: 100%;
	padding: 1rem;
	padding-top: 1.5rem;
}
.close {
	position: absolute;
	top: -5px;
	right: -5px;
}
.tit {
	text-transform: uppercase;
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
.myrow {
	display: flex;
	flex-wrap: wrap;
}

.dtb {
	width: 210px;
	transform: translate(30px, -10px);
	z-index: 5;
}
.discon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.gra {
	margin-top: -2rem;
}
.date {
	position: absolute;
	top: 0;
	right: 5rem;
	font-size: 0.8rem;
	color: #666;
}
</style>
