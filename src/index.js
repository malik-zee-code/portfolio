import initTilt from "./js/tilt";
import initSr from "./js/sr";
import resume from "./assets/resume.pdf";

import "./style/main.scss";

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

const mailButton = document.querySelector(".cta-btn--resume");
mailButton.setAttribute("href", "mailto:ze3062786@gmail.com");

function addResume(pdf) {
  if (!pdf) return;

  // const mailButton = document.querySelector(".cta-btn--resume");
  // mailButton.setAttribute("href", "mailto:ze3062786@gmail.com");
  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

initSr();
initTilt();

// uncomment this if you want to attach your resume
addResume(resume);
