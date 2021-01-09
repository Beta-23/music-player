
const image = document.querySelector('img');
const title = document.querySelector('title');
const artist = document.querySelector('artist');
const music = document.querySelector('audio');
const prevButton = document.getElementById('prev')
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');

// Music library
const songs = [
    {
        name: 'ad-1',
        displayName: 'Album 1',
        artist: 'Artist 1'
    },
    {
        name: 'ad-2',
        displayName: 'Album 2',
        artist: 'Artist 2'
    },
    {
        name: 'ad-3',
        displayName: 'Album 3',
        artist: 'Artist 3'
    },
    {
        name: 'rhythmic-1',
        displayName: 'rhythmic-1',
        artist: 'rhythmic-artist'
    }

];


// Check if playing
let isPlaying = false;

// Play Btn
function playSong() {
    isPlaying = true;
    playButton.classList.replace('fa-play', 'fa-pause');
    playButton.setAttribute('title', 'Pause');
    music.play();
}

// Pause Btn
function pauseSong() {
    isPlaying = false;
    playButton.classList.replace('fa-pause', 'fa-play');
    playButton.setAttribute('title','Play');
    music.pause();
}

// Play or Pause event listener
playButton.addEventListener('click', () => (
    isPlaying ? pauseSong() : playSong()));


