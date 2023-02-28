let featuare = document.getElementById("feat");
let arrowF = "down";
let arrowC = "down";
let company = document.getElementById("comp");
let featuareMenu = featuare.querySelector(".inner");
let companyMenu = company.querySelector(".inner1");
let menuIcon = document.getElementById("icon");
let navBar = document.getElementsByTagName("nav")[0];
let closeIcon = document.getElementById("close");

document.body.addEventListener("click", (e) => {
  if (e.target == featuare) {
    if (arrowF == "down") {
      document.documentElement.style.setProperty(
        "--down-up-arrow-f",
        "url(images/icon-arrow-up.svg)"
      );
      arrowF = "up";
      featuareMenu.setAttribute("style", "display : flex !important; ");
    } else {
      document.documentElement.style.setProperty(
        "--down-up-arrow-f",
        "url(images/icon-arrow-down.svg)"
      );
      arrowF = "down";
      featuareMenu.setAttribute("style", "display : none !important; ");
    }
  } else if (e.target == company) {
    if (arrowC == "down") {
      document.documentElement.style.setProperty(
        "--down-up-arrow-c",
        "url(images/icon-arrow-up.svg)"
      );
      arrowC = "up";
      companyMenu.setAttribute("style", "display : flex !important; ");
    } else {
      document.documentElement.style.setProperty(
        "--down-up-arrow-c",
        "url(images/icon-arrow-down.svg)"
      );
      arrowC = "down";
      companyMenu.setAttribute("style", "display : none !important; ");
    }
  }
});

menuIcon.addEventListener("click", () => {
  navBar.classList.add("mobile");
  document.body.classList.add("overlay");
});
closeIcon.addEventListener("click", () => {
  navBar.classList.remove("mobile");
  document.body.classList.remove("overlay");
});
