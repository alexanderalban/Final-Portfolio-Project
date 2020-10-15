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



const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('.section');
console.log(sections)
function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY< sections[index].offsetTop +1000) {
    
    console.log("windowscrolly" , window.scrollY , "sectionsoffsettop" , sections[index].offsetTop )
    links.forEach((link) => link.classList.remove('current'));
    
  links[index].classList.add('current');
  };
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

