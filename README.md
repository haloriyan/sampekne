# Sampekne

Create simple presentation using javascript

## How to use
```
let app = new Sampekne({
	el: "#myDiv",
	slides: [
		{
			title: "Hello world!",
			content: "Lorem ipsum dolor sit amet!"
		},
		{
			title: "My Second Slide",
			content: "Use this content"
		}
	]
})
```

## How to control?
You can change to next slide using Arrow button (left or right) and mouse click, left click to previous and right click to next slide.

## Styling
It will rendering 2 DOM, heading (h1) as title and paragraph (p) as content. So you can styling with your own css as you like to. You can follow the example in `slider.html` page to modify your own style.