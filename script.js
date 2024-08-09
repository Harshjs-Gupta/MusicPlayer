import { playList } from "./data.js";
import { changeBackground } from "./backgroundChange.js";

// console.log(playList);
// console.log(playList.map((t) => t.title).join(", "));

const downArrowBtn = document.querySelector(".dropDownArrow");
const listSelector = document.querySelector(".selectorBox");
const upArrowBtn = document.querySelector(".dropUpArrow");
const titleModelBox = document.querySelector(".dropDown_model");
const trackscontainer = document.querySelector(".tracks_title");
const closeModel = document.querySelector(".overlay");

const displayTracksList = function (item) {
  const html = `<div class="tracks_title" title="${item.title}" id="${item.id}" url="${item.url}" author="${item.author}" author_link="${item.author_link}" >${item.title}</div>`;
  titleModelBox.insertAdjacentHTML("beforeend", html);
};

playList.forEach((item) => displayTracksList(item));

// Track list model Box
const musicList = function () {
  //   console.log("Hello");
  if (titleModelBox.classList.contains("hidden_dropdown")) {
    titleModelBox.classList.remove("hidden_dropdown");
    downArrowBtn.classList.add("hidden_down_Icon");
    upArrowBtn.classList.remove("hidden_Up_Icon");
    aboutcontainer.classList.add("hidden_about_model");
    settingBox.classList.add("setting_model_hidden");
    listModelBox.classList.add("hidden_list_model");
  } else {
    titleModelBox.classList.add("hidden_dropdown");
    downArrowBtn.classList.remove("hidden_down_Icon");
    upArrowBtn.classList.add("hidden_Up_Icon");
  }
};
listSelector.addEventListener("click", musicList);

// Setting radio model Box
const settingBtn = document.querySelector(".setting_icon");
const settingBox = document.querySelector(".setting_model_box");

settingBtn.addEventListener("click", function () {
  if (settingBox.classList.contains("setting_model_hidden")) {
    settingBox.classList.remove("setting_model_hidden");
    aboutcontainer.classList.add("hidden_about_model");
    titleModelBox.classList.add("hidden_dropdown");
    downArrowBtn.classList.remove("hidden_down_Icon");
    upArrowBtn.classList.add("hidden_Up_Icon");
    listModelBox.classList.add("hidden_list_model");
  } else {
    settingBox.classList.add("setting_model_hidden");
  }
});

// map author name
const nameContainer = document.getElementById("about_music");
const displayAuthorName = function (item) {
  const html = `<a class="author_name" href="${item.author_link}" target="_blank" title="${item.title}" id="${item.id}" url="${item.url}" author="${item.author}" author_link="${item.author_link}" >${item.author}, </a>`;
  nameContainer.insertAdjacentHTML("beforeend", html);
};

playList.forEach((item) => displayAuthorName(item));

// Account model box
const aboutcontainer = document.querySelector(".about_model_box");
const infoBtn = document.querySelector(".info_icon");

infoBtn.addEventListener("click", function () {
  if (aboutcontainer.classList.contains("hidden_about_model")) {
    aboutcontainer.classList.remove("hidden_about_model");
    settingBox.classList.add("setting_model_hidden");
    titleModelBox.classList.add("hidden_dropdown");
    downArrowBtn.classList.remove("hidden_down_Icon");
    upArrowBtn.classList.add("hidden_Up_Icon");
    listModelBox.classList.add("hidden_list_model");
  } else {
    aboutcontainer.classList.add("hidden_about_model");
  }
});

// Previous List  model box
const listBtn = document.getElementById("recent_icon");
const listModelBox = document.querySelector(".list_model_box");

listBtn.addEventListener("click", function () {
  //appear model box
  if (listModelBox.classList.contains("hidden_list_model")) {
    listModelBox.classList.remove("hidden_list_model");
    titleModelBox.classList.add("hidden_dropdown");
    downArrowBtn.classList.remove("hidden_down_Icon");
    upArrowBtn.classList.add("hidden_Up_Icon");
    aboutcontainer.classList.add("hidden_about_model");
    settingBox.classList.add("setting_model_hidden");
  } else {
    listModelBox.classList.add("hidden_list_model");
  }
});

////////////////////////////////////////
//Change background
const allImg = [
  "img1",
  "img2",
  "img3",
  "img4",
  "img5",
  "img6",
  "img7",
  "img8",
  "img9",
  "img10",
];

allImg.forEach((image) => changeBackground(image));

// music control
document.addEventListener("DOMContentLoaded", function () {
  // Select audio element
  const audio = document.querySelector("audio");

  // Select play and pause buttons
  const playButton = document.querySelector(".play_icon");
  const pauseButton = document.querySelector(".pause_icon");

  // Select volume and mute buttons
  const volumeButton = document.querySelector(".volume_icon");
  const muteButton = document.querySelector(".mute_icon");

  // Repeat Button
  const repeatButton = document.querySelector(".repeat_icon");
  const repeatOneButton = document.querySelector(".repeat_one_icon");

  // Play button click event
  playButton.addEventListener("click", function () {
    audio.play();
    playButton.classList.add("hidden_play_Icon");
    pauseButton.classList.remove("hidden_pause_Icon");
  });

  // Pause button click event
  pauseButton.addEventListener("click", function () {
    audio.pause();
    playButton.classList.remove("hidden_play_Icon");
    pauseButton.classList.add("hidden_pause_Icon");
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
  const volumeSlider = document.querySelector("#range");
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
