<template lang="pug">
v-card.cardd
	v-icon(small v-if="item.smart" color="#fbd067").smart mdi-lightbulb
	.hd(v-if="item.text.length") {{ item.text }}
	.hd(v-else) Widget {{ item.i }}
	.badge(v-if="item.badge") {{ item.badge }}
	//- v-btn(text small @click="goTo(item)") go
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
	v-btn(icon small v-show="close" @click="remove(item.id)").close
		v-icon(x-small) mdi-close
	.test
</template>

<script>

export default {
	props: ['item', 'close'],
	data() {
		return {
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
