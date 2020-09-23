<template lang="pug">
.cardd
	.clas
		#chart(v-if="num === 0 && week1.length")
			apexchart(width="100%" type="bar" height="300" :options="chartOptions" :series="series")

		#chart(v-if="num === 1 && week2.length")
			apexchart(width="100%" type="bar" height="300" :options="chartOptions0" :series="series0")

		#chart1(v-show="num === 2")
			apexchart(width="100%" type="bar" height="280" :options="chartOptions1" :series="series1" )

		#chart2(v-show="num === 3")
			v-slide-x-transition(mode="out-in")
				apexchart(v-if="search" width="100%" type="bar" height="280" :options="chartOptions2" :series="series2")

</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
	props: ['database', 'num', 'search', 'cardid', 'week1', 'week2'],
	data () {
		let that = this
		return {
			series2: [{
				data: [124, 71, 23, 35],
			}],
			chartOptions2: {
				colors: [ '#336087', '#666', '#D82121'],
				chart: {
					type: 'bar',
					height: 300,
					events: {
						dataPointSelection: function(event,context,config) {
							let category = that.chartOptions2.xaxis.categories[config.dataPointIndex]
							that.goToSearch(category, that.cardid)
						},
					},
				},
				plotOptions: {
					bar: {
						horizontal: true,
					},
				},
				dataLabels: {
					enabled: false,
				},
				xaxis: {
					categories: ['Обработано', 'В очереди', 'Ошибка', 'Блокировано'],
				},
			},
			series1: [{
				name: 'Процесс 1',
				data: [44, 55, 41, 67, 22, 43],
			}, {
				name: 'Процесс 2',
				data: [13, 23, 20, 8, 13, 27],
			}, {
				name: 'Процесс 3',
				data: [11, 17, 15, 15, 21, 14],
			}, {
				name: 'Процесс 4',
				data: [21, 7, 25, 13, 22, 8],
			}],
			chartOptions1: {
				chart: {
					type: 'bar',
					height: 300,
					stacked: true,
					toolbar: {
						show: true,
					},
					zoom: {
						enabled: true,
					},
				},
				theme: {
					monochrome: {
						enabled: true,
						color: '#2696F7',
						shadeTo: 'dark',
						shadeIntensity: 0.65,
					},
				},
				responsive: [{
					breakpoint: 480,
					options: {
						legend: {
							position: 'bottom',
							offsetX: -10,
							offsetY: 0,
						},
					},
				}],
				plotOptions1: {
					bar: {
						horizontal: false,
					},
				},
				xaxis: {
					type: 'category',
					categories: ['SW1', 'SW2', 'SW3', 'SW3',
											 'SW4', 'SW5',
					],
				},
				legend: {
					position: 'left',
					offsetY: 40,
				},
			},
			series: [
				{
					name: 'Ошибка',
					data: [44, 55, 57, 61, 58, 60],
				},
				{
					name: 'В работе',
					data: [76, 85, 101, 98, 114, 94],
				},
				{
					name: 'Блокировано',
					data: [35, 41, 48, 52, 53, 41],
				},
			],
			chartOptions: {
				colors: [ '#A2333A','#336087', '#F0831E', '#D82121'],
				chart: {
					toolbar: {
						show: true,
						tools: {
							download: true,
						},
					},
					events: {
						dataPointSelection: function(event,context,config) {
							let category = that.series[config.seriesIndex].name
							let series = that.chartOptions.xaxis.categories[config.dataPointIndex]
							that.goTo(series, category)
						},
					},
				},
				plotOptions: {
					bar: {
						horizontal: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					show: true,
					width: 2,
					colors: ['transparent'],
				},
				xaxis: {
					categories: ['ГЗ', 'Задания', 'Согласования', 'Почта ГЗ', 'Почта заданий', 'Почта согласований' ],
				},
			},
			series0: [
				{
					data: [144, 65, 157, 161, 258, 160, 194],
				},
			],
			chartOptions0: {
				fill: {
					colors: [ '#336087', '#F0831E', '#D82121'],
				},
				chart: {
					toolbar: {
						show: true,
						tools: {
							download: true,
						},
					},
					events: {
						dataPointSelection: function(event,context,config) {
							let category = that.series[config.seriesIndex].name
							let series = that.chartOptions.xaxis.categories[config.dataPointIndex]
							that.goTo0(series, category)
						},
					},
				},
				plotOptions: {
					bar: {
						horizontal: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					show: true,
					width: 2,
					colors: ['transparent'],
				},
				xaxis: {
					categories: [
						[ 'Группа', 'заданий' ],
						[ 'Почта', 'ГЗ' ],
						'Задания', [ 'Почта', 'заданий' ], 'Согласования', [ 'Почта', 'согласований' ], 'Backoffice', 
					],
				},
			},
		}
	},
	components: {
		apexchart: VueApexCharts,
	},
	methods: {
		goTo(e, b) {
			this.$router.push({name: 'messagelogs', params: {category: e, item: b}})
		},
		goTo0(e, b) {
			this.$router.push({name: 'messagelogs0', params: {category: e, item: b}})
		},
		goToSearch(e, b) {
			this.$router.push({name: 'cardsearch', params: {category: e, cardid: b }})
		},
	},
}

</script>

<style scoped lang="scss">
#chart, #chart1 {
	margin-top: -1rem;
}
.clas {
	margin-left: -1rem;
}
.fle {
	position: absolute;
	top: -66px;
	right: 0;
	width: 300px;
	display: flex;
	align-items: center;
}
#chart2 {
	margin-top: -2rem;
}


</style>
