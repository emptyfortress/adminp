<template lang="pug">
.time
	vac( :start-time="new Date().getTime()" :end-time="new Date().getTime() + 400000000" )
		template( v-slot:process="{ timeObj }" )
			//- v-icon mdi-timer-outline
			span.days {{ `${timeObj.d} дня, ${timeObj.h}:${timeObj.m}:${timeObj.s}` }}
		template(v-slot:finish)
			span Done!
</template>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--dark .v-icon, .theme--dark .days {
	color: #ff485e;
}
.v-icon {
	color: $error;
}
.time {
	white-space: nowrap;
}
.days {
	color: $error;
	margin-left: 1rem;
	cursor: pointer;
	border-bottom: 1px dotted $error;
}

</style>
