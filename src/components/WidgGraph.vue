<template lang="pug">
.cardd
	.clas
		#chart(v-show="num === 0")
			apexchart(width="100%" type="bar" height="300" :options="chartOptions" :series="series")

		#chart1(v-show="num === 1")
			apexchart(width="100%" type="bar" height="300" :options="chartOptions1" :series="series1")
		div(v-show="num === 2") three
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
	props: ['database', 'num', 'd1'],
	data () {
		let that = this
		return {
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
					palette: 'palette3',
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
					categories: ['WS1', 'WS2', 'WS3', 'WS3',
											 'WS4', 'WS5',
					],
				},
				legend: {
					position: 'left',
					offsetY: 40,
				},
				fill: {
					opacity: 1,
				},
			},
			series: [{
				name: 'В работе',
				data: [44, 55, 57, 61, 58, 60],
			}, {
				name: 'Блокировано',
				data: [76, 85, 101, 98, 114, 94],
			}, {
				name: 'Ошибка',
				data: [35, 41, 48, 52, 53, 41],
			}],
			chartOptions: {
				chart: {
					toolbar: {
						show: true,
						tools: {
							download: true,
						},
					},
					events: {
						click: function(event, chartContext) {
							console.log(event)
							that.goTo(chartContext)
						},
					},
				},
				theme: {
					palette: 'palette3',
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
					categories: ['Группа заданий', 'Задания', 'Согласования', 'Почта ГЗ', 'Почта заданий', 'Почта согласования' ],
				},
			},
		}
	},
	components: {
		apexchart: VueApexCharts,
	},
	methods: {
		goTo(e) {
			console.log(e)
			this.$router.push('/logs')
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
.apexcharts-toolbar {
	display: none !important;
}

</style>
