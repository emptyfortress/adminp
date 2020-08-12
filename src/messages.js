const headers = [
	// { text: '#', align: 'start', sortable: true, value: 'number'},
	{ text: 'create date', align: 'start', sortable: true, value: 'date'},
	{ text: 'object ID', align: 'start', sortable: true, value: 'digest'},
	{ text: 'state', align: 'start', sortable: true, value: 'state'},
	{ text: 'Main.info Type ID', align: 'start', sortable: true, value: 'gservice'},
	{ text: 'type ID', align: 'start', sortable: true, value: 'service'},
	{ text: 'Subtype ID', align: 'start', sortable: true, value: 'type'},
	{ text: 'Data', align: 'start', sortable: true, value: 'info'},
	{ text: 'database', align: 'start', sortable: true, value: 'database'},

]

const messages = [
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'ГЗ ', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта ГЗ', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Согласования', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта заданий', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'ГЗ ', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта ГЗ', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта заданий', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта заданий', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'ГЗ ', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Согласования', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта ГЗ', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта согласований', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта ГЗ', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DVM рабочая' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта согласований', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Согласования', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 1' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Почта согласований', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Задания', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
	{ number:  0,  date: '01.12.19 -- 10:15:35', digest: 'Напишите отчет', state: 'обработано', gservice: 'Backoffice', service: 'Backoffice', type: 'lorem ipsum some text', info: 'отправлено исполнителям', database: 'DB 2' },
]

export {
	headers,
	messages,
}
