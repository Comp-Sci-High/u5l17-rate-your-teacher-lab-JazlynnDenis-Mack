// Add an event listener to the form that upon submits creates a new rating
const createForm = document.querySelector("form")
createForm.addeventlistener("submit", async (e) => {
	e.preventDefault()
	const rating = await new FormData(createForm)
	const reqBody = await object.fromEntries(rating)
	console.log(reqBody)

	const response = await fetch("/add/rating", {
		method: POST,
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(reqBody)
	})
	const data = await response.json()
	console.log(data)
	window.location.href = "/"
})



// When the rating is created redirect to the ratings page
