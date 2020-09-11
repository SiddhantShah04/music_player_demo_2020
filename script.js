const image=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn= document.getElementById('prev');
const playBtn= document.getElementById('play');
const nextBtn= document.getElementById('next');

const songs=[
{
name:'despacito',
displayName:'Despacito',
artist:'Luis Fonsi - Despacito ft. Daddy Yankee',
},
{
name:'jacinto-1',
displayName:'Second Song',
artist:'Arijit Singh',
},
{
name:'jacinto-2',
displayName:'Third Song',
artist:'Sonu Nigam',
},
{
name:'jacinto-3',
displayName:'Fourth Song',
artist:'Md.Irfan',
},
{
name:'metric-1',
displayName:'Fourth Song',
artist:'Jubin Nautiyal',
},
];

//Che ck if playing
let isPlaying = false;


// play 
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','Pause');
    music.play();
}

// pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title','Play');
    music.pause();
}

// play or pause
playBtn.addEventListener('click',()=>(isPlaying ? pauseSong() :playSong()));

function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src=`music/${song.name}.mp3`;
    image.src=`img/${song.name}.jpg`;
}

// Current Song 
let songIndex = 0;
// Prev song
function prevSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}


// Next Song
function nextSong(){
    songIndex++;
    if (songIndex > songs.length-1){
        songIndex=0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// On Load - Select First Song;
loadSong(songs[songIndex]);

// Event Listener
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
