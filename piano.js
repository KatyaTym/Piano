var x = document.getElementById("myAudio");

const sound = new Audio();

function playAudio(key) {
    switch (key) {
        case 'a':
            sound.src = "piano_music/1.mp3";
            break;
        case 's':
            sound.src = "piano_music/2.mp3";
            break;
        case 'd':
            sound.src = "piano_music/3.mp3";
            break;
        case 'f':
            sound.src = "piano_music/4.mp3";
            break;
        case 'g':
            sound.src = "piano_music/5.mp3";
            break;
        case 'h':
            sound.src = "piano_music/6.mp3";
            break;
        case 'j':
            sound.src = "piano_music/7.mp3";
            break;
        case 'k':
            sound.src = "piano_music/8.mp3";
            break;
    }
    sound.play();
}

function animateAndPlay(keyName) {
    const keyElement = document.getElementById(keyName + '_key');
    const animationTimeout = 250;

    keyElement.classList.add("play");
    setTimeout(function() {
        keyElement.classList.remove("play");
    }, animationTimeout);
    playAudio(keyName);
}

function addGlobalKeyPressEvent() {
    document.addEventListener('keypress', (event) => {
        const keyName = event.key;
        animateAndPlay(keyName);
    });
}

addGlobalKeyPressEvent();