let volumeBarDisplay = document.getElementById('volumeBarDisplay');
let bar = document.getElementById('volumeBar');
let video = document.getElementById('video');
let pause = document.getElementById('pause');
let play = document.getElementById('play');

let displayed = false;
let click = 0;
let volume = video.dataset.volume / 100;
let startTime = video.dataset.time;

const constanteDeSonido = 0.1;

video.currentTime = startTime;
video.volume = volume;

volumeBar.value = video.dataset.volume
volumeBarDisplay.click();

document.addEventListener("click", event => {
    if(click >= 1) {
        return;
    }
    click++;

    if(!video.paused) {
        if(video.muted) {
            video.muted = false;
            return;
        }
        return;
    }
    video.play();
})

var promise = video.play();
if(promise !== undefined) {
    promise.then(response => {
        console.log('.')
    })
    .catch(error => {
        console.log(error)
    })
}

pause.addEventListener("click", event => {
    video.pause();
})

play.addEventListener("click", event => {
    video.play();
})

function toggleVolumeBar() {
    if(displayed) {
        bar.style.display = 'none';
        displayed = false;
    }
    else {
        bar.style.display = 'block';
        displayed = true;
    }
}

volumeBarDisplay.addEventListener("click", event => toggleVolumeBar());

bar.addEventListener('change', event => {
    var value = bar.value;
    var mute = document.getElementById('volumeMute');
    var low = document.getElementById('volumeLow');
    var high = document.getElementById('volumeHigh');

    video.volume = value / 100;

    if(value == 0) {
        mute.style.display = 'inline';
        low.style.display = 'none';
        high.style.display = 'none';
    }
    else if(value > 0 && value <= 0.6) {
        mute.style.display = 'none';
        low.style.display = 'inline';
        high.style.display = 'none';
    }
    else {
        mute.style.display = 'none';
        low.style.display = 'none';
        high.style.display = 'inline';
    }
});