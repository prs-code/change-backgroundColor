const colors = [
    "red",
    "yellow",
    "orange",
    "green",
    "blue",
    "violet",
    "lime",
    "pink"
];

function setColor(color) {
    document.body.style.backgroundColor = color;
    document.querySelector(".color-name").innerText = color;

    document.querySelector(`.${color}`).classList.add("active");
};

colors.forEach(color => {                //Button create and append to screen
    const button = document.createElement('button');
    button.classList = color;
    button.innerText = color;
    button.style.backgroundColor = color;
    document.querySelector(".btn-color").appendChild(button);

    button.addEventListener("click", function() {     //background change when clicked on any button and show color name
        setColor(color);
    }) 
});

window.addEventListener("load", () => {  // Change the background color when reloading the page 
    event.preventDefault();
    const randomColor = Math.floor(Math.random() * colors.length);
    const color = colors[randomColor];
    setColor(color);
});


