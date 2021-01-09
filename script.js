const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: 'ad-1',
        displayName: 'Chill Mach',
        artist: 'Design 1',
    },
    {
        name: 'ad-2',
        displayName: '7 (Remix)',
        artist: 'Design 2',
    },
    {
        name: 'ad-3',
        displayName: 'Goodnight Queen',
        artist: 'Design 3',
    },
    {
        name: 'rhythmic-1',
        displayName: 'Jan6th2021',
        artist: 'Day2Remember',
    },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// On Load - Select First Song
loadSong(songs[3]);


