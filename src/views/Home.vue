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
					grid-item( v-for="item in widget1" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" @resized="resizedEvent" ).item
						v-card.cardd
							v-icon(small v-if="item.smart" color="#fbd067").smart mdi-lightbulb
							.hd(v-if="item.text.length") {{ item.text }}
							.hd(v-else) Widget {{ item.i }}
							.badge(v-if="item.badge") {{ item.badge }}
							template(v-if="item.smart")
								.smal(v-show="item.h >= 3 && item.h < 5")
									i.icon-lookma
									span look ma!
								.middl(v-show="item.h >= 5 && item.h < 6")
									i.icon-coolma
									span.ml-8 cool
								.larg(v-show="item.h > 5")
									i.icon-foo
									span.display-1(v-show="item.h >=6 && item.w > 2") fun
									ul
										li(v-for="n in 30")
											vac( :start-time="new Date().getTime()" :end-time="new Date().getTime() + 400000000" )
												template( v-slot:process="{ timeObj }" )
													span {{ `${timeObj.s}` * n + 138}}
													span.ml-3 server uptime
							.test
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
		},
		resizedEvent (i, newH, newW, newHPx, newWPx) {
			console.log('RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
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
		overflow: hidden;
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
.smart {
	position: absolute;
	top: 2px;
	left: 2px;
}
.smal i {
	font-size: 4rem;
}
.middl i {
	font-size: 6rem;
}
.larg i {
	font-size: 10rem;
}

</style>
