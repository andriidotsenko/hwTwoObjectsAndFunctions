// 1. Задача про обчислення різниці часу
//=========================================================================================
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days', 'hours', 'minutes', seconds)

// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
//==========================================================================================

function durationBetweenDates(
	strOne = '1 Jan 1992',
	strTwo = '20 Oct 1992',
	preset = 'hours') {

	const dateOne = new Date(strOne)
	const dateTwo = new Date(strTwo)

	const valueDays = Math.abs((dateOne - dateTwo) / 1000 / 60 / 60 / 24).toFixed(2)
	const valueHours = Math.abs((dateOne - dateTwo) / 1000 / 60 / 60).toFixed(2)
	const valueMinutes = Math.abs((dateOne - dateTwo) / 1000 / 60).toFixed(2)
	const valueSeconds = Math.abs((dateOne - dateTwo) / 1000).toFixed(2)

	if (isNaN(dateOne - dateTwo)) {
		return `Invalid date inputs (1 or 2 args)!`
	} else if (preset === 'days') {
		return ` ${valueDays} ${valueDays => 2 ? "days" : "day"}`
	} else if (preset === 'hours') {
		return ` ${valueHours} ${valueHours => 2 ? "hours" : "hour"}`
	} else if (preset === 'minutes') {
		return ` ${valueMinutes} ${valueMinutes => 2 ? "minutes" : "minute"}`
	} else if (preset === 'seconds') {
		return ` ${valueSeconds} ${valueSeconds => 2 ? "seconds" : "second"}`
	} else {
		return `Invalid preset (arg 3)!`
	}
}

console.log(durationBetweenDates('02 Aug 1985 12:25:56:200', '02 Aug 1985', 'seconds'))
console.log(durationBetweenDates('31 Jan 2022 12:25:56:268', '03 Feb 2021', 'days'))
//========================================================================================================================================================

// 2. Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
//========================================================================================================================================================
const priceData = {
	Apples: '23.4',
	BANANAS: '48',
	oRAngGEs: '48.7584',
	Test: '2222e-2',
	TeST2: -130.999,
};

function optimizer(data) {
	let entriesArr = Object.entries(data)
	for (let i in entriesArr) {
		let arr = entriesArr[i]
		arr[0] = (arr[0]).toLowerCase()
		arr[1] = (+arr[1]).toFixed(2)
	}
	return Object.fromEntries(entriesArr)
}

let updatedPriceData = optimizer(priceData)
console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
//========================================================================================================================================================

// 3. Задача про рекурсію
// Напишіть функцію яка рекурсивно буде знаходити суму 
// всіх непарних додатніх чисел до якогось числа.
//========================================================================================================================================================
function recursiveOddSumTo(number) {
	if (number <= 0 || number > 10000) { //Limit so as not to overload with the number of iterations
		return 0
	} else if (number % 2 !== 0) {
		return number + recursiveOddSumTo(number - 1);
	} else {
		return recursiveOddSumTo(number - 1);
	}
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25
console.log(recursiveOddSumTo(20000)) // 0 
//========================================================================================================================================================

// 4. Напишіть функцію яка ітеративно (в циклі) буде знаходити
// суму всіх непарних додатніх чисел до якогось числа.
//========================================================================================================================================================

function iterativeOddSumTo(number) {
	let sumValue = 0
	for (let i = 1; i <= number; i++) {
		if (number <= 0) {
		} else if (i % 2 !== 0) {
			sumValue += i
		}
	}
	return sumValue
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25
console.log(iterativeOddSumTo(20000)) // 100000000 
// (Not 0, because there is no "number > 10000" check as in "recursiveOddSumTo")



