const circles = document.querySelectorAll('.circle')
const btn = document.getElementById('submit')
const rate = document.getElementById('rate')
const thankyou = document.getElementById('thankyou')
const rating = document.getElementById('rating')

let currentRating = 0

const update = (idx) => {
	circles.forEach((circle) => {
		circle.removeAttribute('id')
	})
	circles[idx].id = 'selected'
}

const handleSelect = (e) => {
	currentRating = +e.target.innerText
	update(currentRating - 1)
	console.log()
}

circles.forEach((circle) => {
	circle.addEventListener('click', handleSelect)
})

const handleSubmit = () => {
	rate.style.display = 'none'
	thankyou.style.display = 'flex'
}

btn.addEventListener('click', () => {
	if (currentRating === 0) return
	rating.innerText = currentRating
	handleSubmit()
})
