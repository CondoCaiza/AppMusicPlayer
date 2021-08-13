$(document).ready(function() {
    const title = document.querySelector('.title');
    const prev = document.querySelector('.prev');
    const playPause = document.querySelector('.playPause');
    const next = document.querySelector('.next');
    const audio = document.querySelector('audio');
    const songList = [{
            path: "audio/Meduza, Alok - Piece Of Your Heart (Alok Remix) ft. Goodboys.mp3",
            songName: "Meduza, Alok - Piece Of Your Heart (Alok Remix) ft. Goodboys.mp3"
        },
        {
            path: "audio/Eminem-Lose yourself (SOUTHPAW) 2017.mp3",
            songName: "Eminem-Lose yourself (SOUTHPAW) 2017.mp3"
        },
        {
            path: "audio/Eminem - Phenomenal HD.mp3",
            songName: "Eminem - Phenomenal HD.mp3"
        },
        {
            path: "audio/car-alarm.mp3",
            songName: "car-alarm.mp3"
        },
        {
            path: "audio/iphone-notificacion.mp3",
            songName: "iphone-notificacion.mp3"
        },
        {
            path: "audio/kit-auto-fantastico-series-tv-.mp3",
            songName: "kit-auto-fantastico-series-tv-.mp3"
        },
        {
            path: "audio/mario-bros tuberia.mp3",
            songName: "mario-bros tuberia.mp3"
        },
        {
            path: "audio/ringtones-iphone-8-plus.mp3",
            songName: "ringtones-iphone-8-plus.mp3"
        },
        {
            path: "audio/ringtones-kill-bill-whistle.mp3",
            songName: "ringtones-kill-bill-whistle.mp3"
        },
        {
            path: "audio/ringtones-page-gallo-despertador.mp3",
            songName: "ringtones-page-gallo-despertador.mp3"
        },
    ]
    let songPlaying = false;

    function playSong() {
        songPlaying = true;
        audio.play();
        playPause.classList.add('active');
        //change from
        playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    }

    function pauseSong() {
        songPlaying = false;
        audio.pause();
        playPause.classList.remove('active');
        playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
    }
    // play or pause song on click
    playPause.addEventListener('click', () => (songPlaying ? pauseSong() : playSong()));


    // load song
    function loadSong(songList) {
        title.textContent = songList.songName;
        audio.src = songList.path;
    }
    // current song
    let i = 0;
    //on load - select first soong from song list
    loadSong(songList[i]);

    function prevSong() {
        i--;
        if (i < 0) {
            i = songList.length - 1;
        }
        loadSong(songList[i]);
        playSong();
    }
    prev.addEventListener('click', prevSong);

    function nextSong() {
        i++;
        if (i > songList.length - 1) i = 0;
        loadSong(songList[i]);
        playSong();
    }
    next.addEventListener('click', nextSong);
});