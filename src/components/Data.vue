<template lang="pug">
.table
	v-data-table(:headers="headers" :items="items").tabs
</template>

<script>

export default {
	props: ['headers', 'items'],
	data() {
		return {

		};
	},
};

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.tabs {
	border: 1px solid #ccc;
	/* border-radius: 10px; */
}
</style>
