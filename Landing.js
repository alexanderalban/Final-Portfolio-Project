window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.background = "rgb(37, 37, 37)";
  } else {
    document.getElementById("navbar").style.opacity = "rgb(59, 59, 59)";
  }
}

let link = document.querySelectorAll('a[href^="#"]');
link.forEach((anchor) => {
  // anchor.classList.remove("current");
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // anchor.classList.add("current");
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let mainSections = document.querySelectorAll(".section");
let mainBody = document.querySelector("body");
let fromTop = mainBody.scrollTop;
let mainNavLinks = document.querySelectorAll(".link");

mainBody.addEventListener("scroll", function () {
  fromTop = mainBody.scrollTop;
  mainNavLinks.forEach(function (currentValue, currentIndex) {
    let section = mainSections[currentIndex];
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      currentValue.classList.add("current");
    } else {
      currentValue.classList.remove("current");
    }
  });
});
