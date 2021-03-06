let timer = (delay, callback) => {
	
	delay = delay ?? 3000
	callback = callback ?? function() {}
	
	let counter = delay / 1000

	let timerdiv = $('<div/>', {id : `countDown`})

	timerdiv.appendTo($('main .container .row'))

	let countDown = setInterval(() => {
		
		$('#countDown').html(counter)
		console.log(counter)

		if(counter < 1) {
			clearInterval(countDown)
			timerdiv.remove()
			typeof(callback) == 'function' ? callback() : undefined
		}

		counter--
	}, 1000)

}