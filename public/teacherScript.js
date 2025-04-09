// Add an event listener to the form that upon submits creates a new teacher
const createForm = document.querySelector("form")
createForm.addeventlistener("submit", async (e) => {
    e.preventDefault()
    const teacher = new FormData(createForm)
    const reqBody = Object.fromEntries(teacher)
    console.log(reqBody)

    const response = await fetch("/add/teacher", {
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

// When the teacher is created redirect to the teachers page
