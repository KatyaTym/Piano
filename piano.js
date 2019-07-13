var soundsMap = new Map();

function playAudio(keyName) {
    var sound = soundsMap.get(keyName);
    if (!sound) {
        sound = new Audio();
        sound.src = "piano_music/" + keyName + ".mp3";
        console.log(sound.src + " Created");

        soundsMap.set(keyName, sound);
    }
    sound.currentTime = 0.0;
    sound.play();
}

function animateAndPlay(keyName) {
    const keyElement = document.getElementById(keyName + '_key');

    if (keyElement) {
        const animationTimeout = 250;

        keyElement.classList.add("play");
        setTimeout(function() {
            keyElement.classList.remove("play");
        }, animationTimeout);

        playAudio(keyName);
    }
}

function addGlobalKeyPressEvent() {
    document.addEventListener('keypress', (event) => {
        const keyName = event.key;
        animateAndPlay(keyName);
    });
}

addGlobalKeyPressEvent();