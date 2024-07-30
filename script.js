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
