// First Js Addition
let c = console.log;

/** Start onscroll event */
window.onscroll = function () {
  // Start Scroll Up Button
  if (window.scrollY >= articlesSection.offsetTop - 250) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
  // End Scroll Up Button

  // Start Skills
  if (window.scrollY >= skills.offsetTop - 250) {
    skillsProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // End Skills

  // Start Stats
  if (window.scrollY >= statsSection.offsetTop - 250) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  // End Stats
};
/** End onscroll event */

/** Start Scroll Up Button */
let scrollUpButton = document.querySelector(".landing a.up ");
let articlesSection = document.querySelector(".articles");
/** End Scroll Up Button */

/** Start Skills */
let skills = document.querySelector(".our-skills");
let skillsProgress = document.querySelectorAll(".the-prog span");
/** End Skills */
/** Start Stats */
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .statsInfo");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
/** End Stats */

/** Start Event */
// Target Date
let eventDate = new Date("Dec 31, 2024 23:59:59");

let countDownDate = setInterval(() => {
  // Date Now
  let dateNow = Date.now();
  // Differancd between Target Date and Date Now
  let dateDiff = eventDate - dateNow;
  // Set unit Time
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".eventDays").innerHTML = days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".eventHours").innerHTML =
    hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".eventMinutes").innerHTML = minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".eventSeconds").innerHTML = seconds;
  // Action After Event
  if (dateDiff == 0) {
    clearInterval(countDownDate);
  }
}, 1000);
/** End Event */
