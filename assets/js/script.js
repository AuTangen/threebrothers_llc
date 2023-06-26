const section = document.querySelector(".section2");
const quoteBtn = document.getElementById("pinned-btn")

console.log(quoteBtn)




const scrollFunc = () => {

    let scrollY = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (scrollY > 700) {
    quoteBtn.className = "btn btn-danger show";
    
  } else {
    quoteBtn.className = "btn btn-danger hide";
  }
};

window.addEventListener("scroll", scrollFunc);