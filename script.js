const music = document.querySelector('audio');
const prevButton = document.getElementById('prev')
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');

// Check if playing
let isPlaying = false;

// Play Btn
function playSong() {
    isPlaying = true
    music.play();
}

// Pause Btn
function pauseSong() {
    isPlaying = false
    music.pause();
}