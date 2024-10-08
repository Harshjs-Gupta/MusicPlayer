// music control
export default function controler() {
  // music control
  document.addEventListener("DOMContentLoaded", function () {
    // Select audio element
    const audio = document.querySelector("audio");

    // Select play and pause buttons
    const footerPlayButton = document.querySelector(".footer_play_icon");
    const footerPauseButton = document.querySelector(".footer_pause_icon");
    const playButton = document.querySelector(".play_icon");
    const pauseButton = document.querySelector(".pause_icon");

    // Select volume and mute buttons
    const volumeButton = document.querySelector(".volume_icon");
    const muteButton = document.querySelector(".mute_icon");

    // Repeat Button
    const repeatButton = document.querySelector(".repeat_icon");
    const repeatOneButton = document.querySelector(".repeat_one_icon");

    // Range Button
    const volumeSlider = document.querySelector("#range");

    // Play button click event
    playButton.addEventListener("click", function () {
      console.log("hello");
      audio.play();
      playButton.classList.add("hidden_play_Icon");
      pauseButton.classList.remove("hidden_pause_Icon");
    });

    pauseButton.addEventListener("click", function () {
      audio.pause();
      playButton.classList.remove("hidden_play_Icon");
      pauseButton.classList.add("hidden_pause_Icon");
    });

    footerPlayButton.addEventListener("click", function () {
      audio.play();
      footerPlayButton.classList.add("hidden_play_Icon");
      footerPauseButton.classList.remove("hidden_pause_Icon");
    });

    // Footer pause button click event
    footerPauseButton.addEventListener("click", function () {
      audio.pause();
      footerPlayButton.classList.remove("hidden_play_Icon");
      footerPauseButton.classList.add("hidden_pause_Icon");
    });

    // Volume button click event
    volumeButton.addEventListener("click", function () {
      audio.muted = true;
      volumeButton.classList.add("volume_hidden");
      muteButton.classList.remove("mute_hidden");
    });

    // Mute button click event
    muteButton.addEventListener("click", function () {
      audio.muted = false;
      volumeButton.classList.remove("volume_hidden");
      muteButton.classList.add("mute_hidden");
    });

    // Volume range slider event
    volumeSlider.addEventListener("input", function () {
      audio.volume = volumeSlider.value / 100;

      if (audio.volume === 0) {
        volumeButton.classList.add("volume_hidden");
        muteButton.classList.remove("mute_hidden");
      } else {
        volumeButton.classList.remove("volume_hidden");
        muteButton.classList.add("mute_hidden");
      }
    });

    // Event listener for when audio ends
    audio.addEventListener("ended", function () {
      playButton.classList.remove("hidden_play_Icon");
      pauseButton.classList.add("hidden_pause_Icon");
    });

    // repeat music
    repeatButton.addEventListener("click", function () {
      audio.loop = true;
      repeatButton.classList.add("hidden_repeat_Icon");
      repeatOneButton.classList.remove("hidden_repeat_one_Icon");
    });

    repeatOneButton.addEventListener("click", function () {
      audio.loop = false;
      repeatButton.classList.remove("hidden_repeat_Icon");
      repeatOneButton.classList.add("hidden_repeat_one_Icon");
    });
  });
}
controler();
