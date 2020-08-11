<template lang="pug">
.cardd
	.clas
		#chart(v-show="num === 0")
			apexchart(width="100%" type="bar" height="300" :options="chartOptions" :series="series")

		div(v-show="num === 1") two
		div(v-show="num === 2") three
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
	props: ['database', 'num', 'd1'],
	data () {
		return {
			series: [{
				name: 'В работе',
				data: [44, 55, 57, 61, 58, 60],
			}, {
				name: 'Блокировано',
				data: [76, 85, 101, 98, 114, 94],
			}, {
				name: 'С ошибкой',
				data: [35, 41, 48, 52, 53, 41],
			}],
			chartOptions: {
				chart: {
					toolbar: {
						show: false,
						tools: {
							download: false,
						},
					},
					events: {
						click: function() {
							console.log(4444)
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
					categories: ['Группа заданий', 'Почта ГЗ', 'Задания', 'Почта заданий', 'Согласования', 'Почта согласования' ],
				},
			},
		}
	},
	components: {
		apexchart: VueApexCharts,
	},
}

</script>

<style scoped lang="scss">
#chart {
	margin-top: -1rem;
}
.clas {
	margin-left: -1rem;
}
.apexcharts-toolbar {
	display: none !important;
}

</style>
