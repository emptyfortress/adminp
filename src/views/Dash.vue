<template lang="pug">
.dash
	grid-layout(:layout.sync="widgets" :col-num="12" :row-height="30" :is-draggable="drag" :is-resizable="resize" :is-mirrored="false" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true" )
		grid-item( v-for="item in widgets" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.id" @resized="resizedEvent" ).item
			v-card.cardd
				.date(v-show="closeWidget") 3 мин назад
				v-btn(icon small v-show="closeWidget" ).reload
					v-icon(small) mdi-reload
				v-btn(icon small v-show="closeWidget" @click="item.setup = !item.setup").setup
					v-icon(small) mdi-cog
				v-btn(icon small v-show="closeWidget" @click="removeWidget(item.id)").close
					v-icon(small) mdi-close
				div(v-if="!item.setup || item.id == 2")
					.myrow
						.tit {{ item.text }}
						.dtb
							v-select(:items="database" v-model="item.mod" prepend-icon="mdi-database" dense placeholder="Database" v-if="item.showDb")
					img(src="@/assets/img/disconnected.svg" v-if="item.mod.length === 0").discon
					WidgGraph(:database='database' :num="item.id" v-else).gra
				div(v-else)
					.tit Настройки
					v-form
						v-row
							v-col(cols="6").px-5
								v-text-field(label="Название" v-model="item.text")
								v-select(:items="database" v-model="item.mod" prepend-icon="mdi-database" dense placeholder="Database по умолчанию")
								v-checkbox(v-model="item.showDb" label="Разрешить выбор db")
							v-col(cols="6").px-5
								v-checkbox(v-model="refresh" label="Автообновление данных")
								v-slider(label="Интервал, сек" v-model="slider" min="5" max="300")
									template(v-slot:append)
										v-text-field(v-model="slider"  hide-details single-line type="number" style="width: 45px" dense).sec
								.d-flex
									v-text-field(hide-details label="Ширина" type="number"  dense).mr-8
									v-text-field(hide-details label="Высота" type="number"  dense)
						v-card-actions
							v-spacer
							v-btn(depressed small @click="item.setup = !item.setup") Reset
							v-btn(depressed color="primary" small @click="item.setup = !item.setup") Сохранить
							v-spacer

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
			refresh: true,
			slider: 120,
			widgets: [
				{ id: 0, url: '/notifications/errorlist', mod: [], showDb: true, 'x': 0, 'y': 0, 'w': 6, 'h': 10, 'i': '0', setup: false, text: 'Очередь входящих' },
				{ id: 1, url: '/notifications/errorlist', mod: [], showDb: true, 'x': 6, 'y': 0, 'w': 6, 'h': 10, 'i': '1', setup: false, text: 'Очередь исходящих' },
				{ id: 2, url: '/notifications/errorlist', mod: [], showDb: true, 'x': 0, 'y': 9, 'w': 6, 'h': 9, 'i': '2', setup: false, text: 'Загрузка Service Workers' },
				{ id: 3, url: '/notifications/errorlist', mod: [], showDb: true, 'x': 6, 'y': 9, 'w': 6, 'h': 9, 'i': '3', setup: false, text: 'Поиск сообщений' },
			],
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
	span {
		margin-left: .5rem;
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
.myrow {
	display: flex;
	flex-wrap: wrap;
}

.dtb {
	width: 200px;
	z-index: 5;
	margin-top: -.6rem;
	margin-bottom: -3rem;
	margin-left: 2rem;
	margin-right: 0;
}
.discon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.date {
	position: absolute;
	top: 0;
	right: 5rem;
	font-size: 0.8rem;
	color: #666;
}
.v-form {
	margin: 0 4rem;
}
.sec {
	margin-top: -.5rem;
}
</style>
