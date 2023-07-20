// 1. Задача про обчислення різниці часу
//=========================================================================================
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days', 'hours', 'minutes', seconds)

// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

// Приклади:
// durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')  // поверне '86400 seconds'
// durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  // поверне '362 days'
//==========================================================================================

function durationBetweenDates(
	strOne = '1 Jan 1992',
	strTwo = '20 Oct 1992',
	preset = 'hours') {

	const dateOne = new Date(strOne)
	const dateTwo = new Date(strTwo)

	if (isNaN(dateOne - dateTwo)) {
		return `Invalid date inputs (1 or 2 args)!`
	} else if (preset === 'days') {
		return ` ${Math.abs((dateOne - dateTwo) / 1000 / 60 / 60 / 24).toFixed(2)} ${(Math.abs((dateOne - dateTwo) / 1000 / 60 / 60 / 24)) > 1 ? "days" : "day"}`
	} else if (preset === 'hours') {
		return ` ${Math.abs((dateOne - dateTwo) / 1000 / 60 / 60).toFixed(2)} ${(Math.abs((dateOne - dateTwo) / 1000 / 60 / 60)) > 1 ? "hours" : "hour"}`
	} else if (preset === 'minutes') {
		return ` ${Math.abs((dateOne - dateTwo) / 1000 / 60).toFixed(2)} ${(Math.abs((dateOne - dateTwo) / 1000 / 60)) > 1 ? "minutes" : "minute"
			}`
	} else if (preset === 'seconds') {
		return ` ${Math.abs((dateOne - dateTwo) / 1000).toFixed(2)} ${(Math.abs((dateOne - dateTwo) / 1000)) > 1 ? "seconds" : "second"}`
	} else {
		return `Invalid preset (3arg)!`
	}
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'))
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'))

//========================================================================================================================================================
