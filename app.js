let pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

let playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    let clickedKey = document.querySelector(`[data.key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() =>{
        clickedKey.classList.remove("active");

    }, 150);

}
pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click" , () => playTune(key.dataset.key))
});

let handleVolume = (e) => {
    audio.volume = e.target.value;

}

let showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

let pressedKey = () =>{
    if(allKeys.includes(e.key)) playTune (e.key);
}

keysCheckbox .addEventListener("click" , showHideKeys);
volumeSlider.addEventListener("input" , handleVolume);
document.addEventListener("keydown" , pressedKey);