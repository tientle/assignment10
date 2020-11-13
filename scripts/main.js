const image = document.querySelector('img');

let sun = "images/sun.png";
let moon = "images/moon.png";

image.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', moon);
};

image.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', sun);
};

// the list of colors
const colors = ['#2DDFFF', '#F5F474', '#E33CC7', '#F54D28',
  '#FFAA47', '#fdb462', '#b3de69', '#fccde5', '#bc80bd',
  '#a0c9d3', '#ffed6f', '#ccebc5',
]
// designate the div
const div = document.querySelector('#llama');
// the event listener
llama.onclick = (e) => {
  // get a new random number
  let num = Math.floor(Math.random() * colors.length);
  // change box color
  e.target.style.backgroundColor = colors[num];
}
