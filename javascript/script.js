const toggleButton=document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-link");
toggleButton.addEventListener("click", ()=>{
  if (navLinks.style.display==="flex")
     {
    navLinks.style.display = "none";//hide
  } else {
    navLinks.style.display = "flex";//show
  }})

navLinkItems.forEach(link => {
  link.addEventListener("click",() => {
    navLinks.style.display = "none";
  });
})