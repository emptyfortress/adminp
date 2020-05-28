<template lang="pug">
v-card.cardd
	v-icon(small v-if="item.smart" color="#fbd067").smart mdi-lightbulb
	.hd(v-if="item.text.length") {{ item.text }}
	.hd(v-else) Widget {{ item.i }}
	.badge(v-if="item.badge") {{ item.badge }}
	template
		.smal(v-show="item.h >= 3 && item.h <= 5")
			v-sheet(color="rgba(0,0,0,.12)").mt-5
				v-sparkline(:value="value" color="#fff" height="100" padding="24" auto-draw)
					template( v-slot:label="item" ) ${{ item.value }}
			.font-weight-thin Инциденты за неделю
		.middl(v-show="item.h > 5 && item.id !== 5").pt-5
			apexchart(width="100%" type="bar" :options="chartOptions" :series="series")
	template(v-if="item.id === 5")
		br
		Scroll
	v-btn(icon small v-show="close" @click="remove(item.id)").close
		v-icon(x-small) mdi-close
	.test
</template>

<script>
import Scroll from '@/components/Scroll'
import VueApexCharts from 'vue-apexcharts'

export default {
	props: ['item', 'close'],
	data() {
		return {
			value: [
				423,
				446,
				675,
				510,
				590,
				610,
				760,
			],
			chartOptions: {
				chart: {
					id: 'vuechart-example',
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
				},
			},
			series: [{
				name: 'series-1',
				data: [30, 40, 35, 50, 49, 60, 70, 91],
			}],
		}
	},
	methods: {
		remove(e) {
			this.$emit('remove', e)
		},
		goTo(e) {
			this.$router.push(e.url)
		},
	},
	components: {
		Scroll,
		apexchart: VueApexCharts,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.cardd {
	width: 100%;
	height: 100%;
	border-radius: .4rem;
	padding: 1rem;
	position: relative;
	overflow: hidden;
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
.close {
	position: absolute;
	top: -5px;
	right: -5px;
}
</style>
