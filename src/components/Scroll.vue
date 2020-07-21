<template lang="pug">
dynamic-marquee(:speed="speed" :repeatMargin="margin")
	.one(v-for="item in items" ) 
		v-icon {{ item.icon }}
		span.time {{ item.time }}
		p {{ item.text }}
</template>

<script>
import DynamicMarquee from 'vue-dynamic-marquee'

export default {
	data () {
		return {
			speed: {
				type: 'pps',
				number: 50,
			},
			margin: 100,
			items: [
				{ time: '12:15', icon: 'mdi-bell-outline', text: 'Задача организации, в особенности же реализация намеченных плановых заданий'},
				{ time: '10:46', icon: 'mdi-reload', text: 'позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач'},
				{ time: '14:52', icon: 'mdi-alert-octagon', text: 'Повседневная практика показывает'},
				{ time: '9:08', icon: 'mdi-alert-octagon', text: 'что укрепление и развитие структуры играет важную роль в формировании новых предложений'},
				{ time: '16:21', icon: 'mdi-message-alert-outline', text: 'Повседневная практика показывает, что рамки и место обучения кадров'},
				{ time: '13:40', icon: 'mdi-bell-outline', text: 'влечет за собой процесс внедрения и модернизации систем массового участия'},
				{ time: '4:15', icon: 'mdi-bell-outline', text: 'Равным образом укрепление и развитие структуры представляет собой'},
				{ time: '20:56', icon: 'mdi-alert-octagon', text: 'интересный эксперимент проверки позиций'},
				{ time: '6:08', icon: 'mdi-alert-octagon', text: 'занимаемых участниками в отношении поставленных задач'},
			],
		}
	},
	components: {
		DynamicMarquee,
	},
}

</script>

<style scoped lang="scss">
.one {
	margin: 1rem 0;
	/* padding: 1rem 0; */
	font-size: .9rem;
	cursor: pointer;
	&:hover {
		background: rgba(0,0,0,.1);
	}
}
.time {
	margin-left: 1rem;
	font-style: italic;
	color: #666;
	&:before {
		content: '--';
		margin-right: 5px;

	}
}

</style>
