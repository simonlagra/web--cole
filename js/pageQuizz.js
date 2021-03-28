(() => {

	let quizz_id = new URL(location.href).searchParams.get('quizz_id')

	console.log({quizz_id})
})()