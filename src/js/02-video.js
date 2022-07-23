import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);


player.on('timeupdate', throttle(playedVideo, 1000));

const timePlay = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))

player.setCurrentTime(timePlay.seconds)


function playedVideo(event) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(event))
}