<template lang="pug">
div
	v-data-table(:headers="headers" 
		:items="items"
		:expanded.sync="expanded"
		show-expand
		disable-pagination
		hide-default-footer
		).tabs
		template(v-slot:item.name="props")
			v-edit-dialog(:return-value.sync="props.item.name") {{ props.item.name }}
				template( v-slot:input )
					v-text-field(v-model="props.item.name" label="Edit" single-line)
		template(v-slot:item.type="props")
			v-edit-dialog(:return-value.sync="props.item.type") {{ props.item.type }}
				template( v-slot:input )
					v-select(v-model="props.item.type" :items="types" label="Edit" single-line)
		template(v-slot:item.pass="props")
			.adding(@click="dialog = !dialog")
				v-icon(color="link") mdi-plus-circle-outline
				span Добавить экземпляр
		template(v-slot:expanded-item="{ headers, item }")
			td
			td
			td
			td.tb
				v-edit-dialog(v-for="n in 2" :key="n") {{ string }}
					template( v-slot:input )
						v-text-field(v-model="string" label="Edit" single-line)
			td.tb
				v-edit-dialog(v-for="n in 2" :key="n") {{ login }}
					template( v-slot:input )
						v-text-field(v-model="login" label="Edit" single-line)
			td
				v-edit-dialog(v-for="n in 2" :key="n") {{ password }}
					template( v-slot:input )
						v-text-field(v-model="password" label="Edit" single-line)
	v-dialog(v-model="dialog" persistent max-width="450")
		v-card
			v-card-title( class="headline" ) Добавить экземпляр соединения
			v-card-text Тип соединения, имя и другие детали
			v-form.px-5
				v-text-field(label="Строка")
				v-text-field(label="Логин")
				v-text-field(label="Пароль")
			v-card-actions
				v-spacer
				v-btn( color="primary" text @click="dialog = false" )  Отмена
				v-btn( color="primary" text @click="dialog = false" )  Сохранить
</template>

<script>

export default {
	data: () => ({
		dialog: false,
		string: 'ConnectionAddress:https://dvm/Docsvison/api',
		login: 'admin',
		password: '******',
		types: [
			'SQL', 'Docsvision', 'Exchange', 'Менеджер решений',
		],
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
	methods: {
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.tb {
	padding: 3px 5px;
}

.adding {
	color: $link;
	cursor: pointer;
	span {
		margin-left: 4px;
	}
}
</style>
