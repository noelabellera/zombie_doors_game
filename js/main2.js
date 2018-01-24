
var images = [
    'https://i.imgur.com/qLyeCTO.png', 
    'https://i.imgur.com/XfBn5Pj.png', 
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
    images.sort(function() {
        return .5 - Math.random();
    });

        doorOne.src = images[0];
    render();
    
    console.log(doorOne.src)
}

function openDoorTwo() {
    images.sort(function() {
        return .5 - Math.random();
    });

        doorTwo.src = images[1];
    
}

function openDoorThree() {
    images.sort(function() {
        return .5 - Math.random();
    });

        doorThree.src = images[2];
    
}



function render() {
    if (doorOne.src == "https://i.imgur.com/qLyeCTO.png" || doorTwo.src == "https://i.imgur.com/qLyeCTO.png" || doorThree.src == "https://i.imgur.com/qLyeCTO.png") {
        msgEl.innerHTML = "You Die!";
    } else {
        msgEl.innerHTML = "You Survived!"
    }


}

function restartButton() {
    init();
}

function init(){
    msgEl.innerHTML = "Welcome, Click on a door!";
    doors.src = "https://i.imgur.com/1dJhrVU.png";
    
}

init();