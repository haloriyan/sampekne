class Sampekne {
	constructor(props) {
		this.el 		= props.el
		this.slides 	= props.slides
		this.posisi 	= 0

		this.show()
		window.addEventListener("keydown", (evt) => {
			if(evt.key == "ArrowRight") {
				this.next()
			}else if(evt.key == "ArrowLeft") {
				this.prev()
			}
		})

		window.addEventListener("click", evt => {
			this.prev()
		})
		window.addEventListener("contextmenu", (e) => {
			this.next()
			e.preventDefault()
		})
	}
	show() {
		let area = document.querySelector(this.el)
		area.innerHTML = ''

		let createTitle = document.createElement("h1")
		createTitle.innerHTML = this.slides[this.posisi].title
		area.appendChild(createTitle)

		let createContent = document.createElement("p")
		createContent.innerHTML = this.slides[this.posisi].content
		area.appendChild(createContent)
	}
	next() {
		this.posisi += 1
		if(this.posisi > (this.slides.length - 1)) {
			this.posisi = this.slides.length - 1
		}
		this.show()
	}
	prev() {
		this.posisi -= 1
		if(this.posisi < 0) {
			this.posisi = 0
		}
		this.show()
	}
}