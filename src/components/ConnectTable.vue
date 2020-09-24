<template lang="pug">
div
	.item
		table.sm
			tr
				td Тип соединения:
				td.edit
					v-edit-dialog(:return-value.sync="item.type" single-line 
) {{  item.type }}
						template(v-slot:input)
							v-select(:items="type" value="SQL")
			tr
				td Название:
				td.edit
					v-edit-dialog(:return-value.sync="item.type" single-line 
) {{ item.name }}
						template(v-slot:input)
							v-text-field(v-model="item.name" label="Edit" single-line)
		v-btn(icon)
			v-icon mdi-trash-can-outline
	.line
		.d-flex.justify-space-between
			.proc Всего соединений: 2
			v-btn(@click="$emit('dial')" small depressed color="primary")
				span Добавить экземпляр
	v-simple-table.sm
		template(v-slot:default)
			thead
				tr
					th Строка
					th Логин
					th Пароль
			tbody
				tr(v-for="row in rows")
					td
						v-edit-dialog {{ row.string }}
							template( v-slot:input )
								v-text-field(v-model="row.string" label="Edit" single-line)
					td
						v-edit-dialog {{ row.login }}
							template( v-slot:input )
								v-text-field(v-model="row.login" label="Edit" single-line)
					td
						v-edit-dialog {{ row.password }}
							template( v-slot:input )
								v-text-field(v-model="row.password" label="Edit" single-line)
</template>

<script>

export default {
	props: ['item'],
	data: () => ({
		rows: [
			{
				string: 'ConnectionAddress:https://dvm/Docsvison/api',
				login: 'admin',
				password: '**********',
			},
			{
				string: 'ConnectionAddress:https://dvm/Exchange/api',
				login: 'admin',
				password: '**********',
			},
			
		],
		type: [
			'SQL', 'Docsvision', 'Exchange', 'Менеджер решений',
		],
	}),
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.sm {
	font-size: .9rem;
	margin-top: 1rem;
	margin-bottom: 2rem;
	td {
		padding: 5px 10px;
	}
	th {
		background: #dedede;
		font-weight: 400;
		font-size: .75rem;
		color: #000;
		height: 28px;
		border-right: 1px solid #fff;
	}
}
.item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;

}
.line {
	border-top: 1px solid #ccc;
	padding-top: 1rem;
}
.adding {
	color: $link;
	cursor: pointer;
	span {
		margin-left: 4px;
	}
}
.edit {
	padding-left: 1rem;
}
.proc {
	font-size: 1.0rem;
	font-weight: bold;
	background: $yellow;
	padding: 3px 10px;
}
</style>
