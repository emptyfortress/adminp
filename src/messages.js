const headers = [
	{ text: 'create date', align: 'start', sortable: true, value: 'date'},
	{ text: 'object ID', align: 'start', sortable: true, value: 'digest'},
	{ text: 'state', align: 'start', sortable: true, value: 'state'},
	// { text: 'Main.info Type ID', align: 'start', sortable: true, value: 'gservice'},
	{ text: 'type ID', align: 'start', sortable: true, value: 'service'},
	{ text: 'Subtype ID', align: 'start', sortable: true, value: 'type'},
	{ text: 'Data', align: 'start', sortable: true, value: 'info'},
]

const headersout = [
	{ text: 'Дайджест (object ID)', align: 'start', sortable: true, value: 'digest'},
	{ text: 'create date', align: 'start', sortable: true, value: 'date'},
	{ text: 'type ID', align: 'start', sortable: true, value: 'service'},
	{ text: 'Subtype ID', align: 'start', sortable: true, value: 'type'},
	{ text: 'Информация по событию', align: 'start', sortable: true, value: 'info'},
	{ text: 'Отложенная отправка', align: 'start', sortable: true, value: 'delay'},
	{ text: 'Дата активации', align: 'start', sortable: true, value: 'activation'},
	{ text: 'Подключенная БД', align: 'start', sortable: true, value: 'bd'},
]

const messages = [
	{ id: 0, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 1, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'ГЗ ', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 2, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', delay: '1', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 3, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'блокировано, ошибка', gservice: 'Backoffice', service: 'Почта ГЗ', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 4, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'ошибка', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 5, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', delay: '1',  state: 'блокировано, ошибка', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 6, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Согласования', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 7, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Почта заданий', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 8, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 9, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 10, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', delay: '1',  state: 'ошибка', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 11, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'ошибка', gservice: 'Backoffice', service: 'ГЗ ', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 12, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта ГЗ', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 13, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 14, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 15, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 16, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта заданий', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 17, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'блокировано, ошибка', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 18, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', delay: '1',  state: 'блокировано', gservice: 'Backoffice', service: 'Почта заданий', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 19, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', delay: '1',  state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 20, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'блокировано, ошибка', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 21, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'ГЗ ', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 22, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 23, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 24, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Согласования', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 25, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Почта ГЗ', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 26, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'блокировано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 27, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'ошибка', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 28, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', delay: '1',  state: 'ошибка', gservice: 'Backoffice', service: 'Почта согласований', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 29, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 30, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Почта ГЗ', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 31, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', delay: '1',  state: 'в работе', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 32, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'блокировано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 33, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Почта согласований', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 34, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 35, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 36, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'ошибка', gservice: 'Backoffice', service: 'Согласования', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 37, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'блокировано', gservice: 'Backoffice', service: 'Почта согласований', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 38, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'ошибка', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 39, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'блокировано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
	{ id: 40, date: '01.12.19 \u2501 10:15:35', digest: 'Напишите отчет', state: 'в работе', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям' },
]

export {
	headers,
	headersout,
	messages,
}
