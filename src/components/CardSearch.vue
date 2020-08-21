<template lang="pug">
.pa-5
	v-snackbar(v-model="cell" absolute color="teal" :timeout="timeout" top) ID скопирован!
	.zag Сообщения карточки
	.rel
		v-btn(outlined color="primary" @click="id = !id").id Показать все ID
		v-text-field(v-model="cardid" label="Card ID" prepend-inner-icon="mdi-magnify" clearable single-line).poisk
	v-tabs(centered).cardtabs
			v-tab(key="1") Входящие сообщения
			v-tab(key="2") Исходящие сообщения
			v-tab-item(key="1")
				TabTable(@snack="cell = true" :id="id" :cardid="cardid")

			v-tab-item(key="2")
				TabTable(@snack="cell = true" :id="id" :cardid="cardid")

</template>

<script>
import TabTable from '@/components/TabTable'

export default {
	data () {
		return {
			cell: false,
			timeout: 2000,
			id: false,
		}
	},
	computed: {
		cardid () {return this.$route.params.cardid},
		category () {return this.$route.params.category},
	},
	components: {
		TabTable,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';


.id {
	position: absolute;
	top: 1rem;
	left: 0;
}
.poisk {
	width: 400px;
	position: absolute;
	top: 0;
	right: 0;
}
.rel {
	z-index: 2;
}
		
</style>
