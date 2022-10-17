const element = document.body;
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const themeBtn = document.querySelector(".theme-btn");
const themeButton = document.getElementById("themeButton");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //Sections Active Class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      //remove selected from the other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //Toggle theme

  themeBtn.addEventListener("click", () => {
    element.classList.toggle("light-mode");

    // If theme is light
    if (element.classList.contains("light-mode")) {
      themeButton.classList.remove("fa-sun");
      themeButton.classList.add("fa-moon");
      themeButton.style.color = "black";
      themeBtn.style.border = "2px solid white";
    }
    //If theme is dark
    else {
      themeButton.classList.remove("fa-moon");
      themeButton.classList.add("fa-sun");
      themeButton.style.color = "#ecd53f";
      themeBtn.style.border = "2px solid #191d2b";
    }
  });
}

PageTransitions();
