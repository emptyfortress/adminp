const headers = [
	// { text: '#', align: 'start', sortable: true, value: 'number'},
	{ text: 'дата', align: 'start', sortable: true, value: 'date'},
	{ text: 'уровень', align: 'start', sortable: true, value: 'level'},
	{ text: 'модуль', align: 'start', sortable: true, value: 'module'},
	{ text: 'описание', align: 'start', sortable: true, value: 'descr'},
	{ text: 'решение', align: 'start', sortable: true, value: 'settle'},
]

const notifications = [
	{ number:  0,  date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number:  1 , date: '01.12.19', level: 'error', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number:  2 , date: '01.12.19', level: 'error', module: 'server', descr: 'fooo', settle: 'yes' },
	{ number:  3 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number:  4 , date: '01.12.19', level: 'warn', module: 'server', descr: 'fooo', settle: 'yes' },
	{ number:  5 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number:  6 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number:  7 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number:  8 , date: '01.12.19', level: 'warn', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number:  9 , date: '01.12.19', level: 'warn', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number: 10 , date: '01.12.19', level: 'error', module: 'server', descr: 'fooo', settle: 'yes' },
	{ number: 11 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 12 , date: '01.12.19', level: 'warn', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 13 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 14 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 15 , date: '01.12.19', level: 'error', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number: 16 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 17 , date: '01.12.19', level: 'error', module: 'server', descr: 'fooo', settle: 'yes' },
	{ number: 18 , date: '01.12.19', level: 'warn', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 19 , date: '01.12.19', level: 'error', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number: 20 , date: '01.12.19', level: 'warn', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 21 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 22 , date: '01.12.19', level: 'error', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number: 23 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 24 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 25 , date: '01.12.19', level: 'error', module: 'server', descr: 'fooo', settle: 'yes' },
	{ number: 26 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 27 , date: '01.12.19', level: 'warn', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number: 28 , date: '01.12.19', level: 'error', module: 'server', descr: 'fooo', settle: 'yes' },
	{ number: 29 , date: '01.12.19', level: 'warn', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 30 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 31 , date: '01.12.19', level: 'error', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number: 32 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 33 , date: '01.12.19', level: 'warn', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 34 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 35 , date: '01.12.19', level: 'warn', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 36 , date: '01.12.19', level: 'error', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number: 37 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 38 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
	{ number: 39 , date: '01.12.19', level: 'error', module: 'client', descr: 'fooo', settle: 'yes' },
	{ number: 40 , date: '01.12.19', level: 'error', module: 'worker service', descr: 'fooo', settle: 'yes' },
]

export {
	headers,
	notifications,
}
