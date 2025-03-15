function random() {
	let a = Math.floor(Math.random() * 5)
	let b = [
		'Убей игрока с наградой 2 миллиона',
		'Убей в одиночку Ордера',
		'Найди "Мираж"',
		'Убей Террор-шарка',
		'Убей 3 морских зверей'
	]
	let randomTask = b[a]
	$('#index').append('<li>' + randomTask + '</li>')
}

function random_two() {
	let a = Math.floor(Math.random() * 3)
	let b = [
		'Убей Короля Тесто',
		'Убей 4 миллионника с fox-lamp',
		'Получи фрукт с пиратов'
	]
	let randomTask = b[a]
	$('#index_two').append('<li>' + randomTask + '</li>')
}
