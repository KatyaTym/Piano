var x = document.getElementById("myAudio");

const sound = new Audio();

function playAudio(key) {
    switch (key) {
        case 'a':
            sound.src = "piano/1.mp3";
            break;
        case 's':
            sound.src = "piano/2.mp3";
            break;
        case 'd':
            sound.src = "piano/3.mp3";
            break;
        case 'f':
            sound.src = "piano/4.mp3";
            break;
        case 'g':
            sound.src = "piano/5.mp3";
            break;
        case 'h':
            sound.src = "piano/6.mp3";
            break;
        case 'j':
            sound.src = "piano/7.mp3";
            break;
        case 'k':
            sound.src = "piano/8.mp3";
            break;
    }
    sound.play();
}