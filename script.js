const songs = [
    {
        title: "Aam Jahe Munde",
        artist: "Parmish Verma",
        source: "songs/song1.mp3",
        image: "songPics/song1pic.jpg"
    },
    {
        title: "Dhundala",
        artist: "Yashraj",
        source: "songs/song2.mp3",
        image: "songPics/song2pic.jpg"

    },
    {
        title: "Check kar",
        artist: "Paradox",
        source: "songs/song3.mp3",
        image: "songPics/song3pic.jpg"

    },
    {
        title: "True Stories",
        artist: "AP Dhillon",
        source: "songs/song4.mp3",
        image: "songPics/song4pic.jpg"
    },
    
];

//controls

const audio = new Audio();
let currentSongIndex = 0; //initialising 

const playPauseButton = document.querySelector('.pausePlay'); //selecting playpause class
playPauseButton.addEventListener('click', function(){
    if(audio.paused){
        audio.src = songs[currentSongIndex].source;
        audio.play();
        playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change to pause icon
    }
    else{
        audio.pause();
        playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // Change back to play icon
    }
    });



const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

previousButton.addEventListener('click', function(){
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex].source;
    audio.play();
    updateSongInfo()
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change to pause icon
});

nextButton.addEventListener('click', function(){
    currentSongIndex = (currentSongIndex+1) % songs.length;
    audio.src = songs[currentSongIndex].source;
    audio.play();
    updateSongInfo()
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change to pause icon
});


function updateSongInfo()
{
    const titleElement = document.querySelector('.songName');
    const artistElement = document.querySelector('.artistName');
    const imageElement = document.querySelector('.album');

    titleElement.innerHTML = songs[currentSongIndex].title;
    artistElement.innerHTML = songs[currentSongIndex].artist;
    imageElement.src = songs[currentSongIndex].image;
}
updateSongInfo()



// ---------------------------------------

// const progressBar = document.querySelector('.progress-bar');
// const songDuration = document.querySelector('.song-duration');

// audio.addEventListener('timeupdate', function () {
//     const currentTime = audio.currentTime;
//     const duration = audio.duration;

//     // Update the progress bar width
//     const progressWidth = (currentTime / duration) * 100;
//     progressBar.style.width = progressWidth + '%';

//     // Update the song duration text
//     const formattedCurrentTime = formatTime(currentTime);
//     const formattedDuration = formatTime(duration);
//     songDuration.textContent = `${formattedCurrentTime} / ${formattedDuration}`;
// });

// // Helper function to format time (e.g., convert 75 seconds to "1:15")
// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// }
