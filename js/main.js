var results = [0, 1, 2]
var images = [
    'https://i.imgur.com/qLyeCTO.png', 
    'https://i.imgur.com/qLyeCTO.png', 
    'https://i.imgur.com/XfBn5Pj.png'
];

var msgEl = document.getElementById("message");
var doorOne = document.getElementById("doorOne");
var doorTwo = document.getElementById("doorTwo");
var doorThree = document.getElementById("doorThree");
var doors = document.querySelectorAll(".doors");
var button = document.getElementById("btn");

document.getElementById("doorOne")
.addEventListener('click', openDoorOne);

document.getElementById("doorTwo")
.addEventListener('click', openDoorTwo);

document.getElementById("doorThree")
.addEventListener('click', openDoorThree);

document.getElementById("btn")
.addEventListener('click', restartButton)



function openDoorOne() {
    results.sort(function() {
        return .5 - Math.random();
    });
    results.forEach(function(picIdx) {
        doorOne.src = images[picIdx];
    })
    render();
    console.log(results);
    console.log(doorOne.src)
    // render()
}

function openDoorTwo() {
    results.sort(function() {
        return .5 - Math.random();
    });
    results.forEach(function(picIdx) {
        doorTwo.src = images[picIdx];
    })
    render();
    console.log(results);
    // render()
}

function openDoorThree() {
    results.sort(function() {
        return .5 - Math.random();
    });
    results.forEach(function(picIdx) {
        doorThree.src = images[picIdx];
    })
    render();
    
    console.log(results);
    // render()
}

function render() {
    if (doorOne.src == images[0] || doorTwo.src == images[0] || doorThree.src == images[0] ||
        doorOne.src == images[1] || doorTwo.src == images[1] || doorThree.src == images[1]) {
        msgEl.innerHTML = "You Die!";
    } else {
        msgEl.innerHTML = "You Survived!"
    }
   
}

function restartButton() {
    init();
}

function init(){
    results.forEach(function(picIdx) {
        doorOne.src = images[picIdx];
    })
    msgEl.innerHTML = "Welcome, Click on a door!";
    doorOne.src = "https://i.imgur.com/1dJhrVU.png";
    doorTwo.src = "https://i.imgur.com/1dJhrVU.png";
    doorThree.src = "https://i.imgur.com/1dJhrVU.png";
    

 
}

init();



