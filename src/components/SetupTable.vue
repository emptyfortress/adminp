<template lang="pug">
v-data-table(:headers="headers" 
	:items="items"
	:expanded.sync="expanded"
	show-expand
	disable-pagination
	hide-default-footer
	).tabs
	template(v-slot:expanded-item="{ headers, item }")
		td
		td
		td
		td
			.tb ConnectionAddress:https://dvm/Docsvison/api
			.tb ConnectionAddress:https://dvm/Docsvison/api
		td
			.tb global-admin
			.tb global-admin
		td
			.tb password
			.tb password

</template>

<script>

export default {
	data: () => ({
		expanded: [
			{ id: 0, type: 'SQL', name: 'Тестовая DVM' },
			{ id: 1, type: 'SQL', name: 'Боевая DVM' },
		],
		headers: [
			{ id: 0, text: 'Тип соединения', value: 'type'},
			{ id: 1, text: 'Имя', value: 'name'},
			{ id: 2, text: 'Строка', value: 'string'},
			{ id: 3, text: 'Логин', value: 'login'},
			{ id: 4, text: 'Пароль', value: 'pass'},
		],
		items: [
			{ id: 0, type: 'SQL', name: 'Тестовая DVM' },
			{ id: 1, type: 'SQL', name: 'Боевая DVM' },
			{ id: 2, type: 'Docsvision', name: 'Current55' },
			{ id: 3, type: 'Exchange', name: 'Current33' },
			{ id: 4, type: 'Менеджер решений', name: 'Current77' },
		],
		
	}),
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.tb {
	padding: 3px 5px;
}

</style>
