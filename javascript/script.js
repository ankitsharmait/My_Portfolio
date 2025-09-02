const toggleButton=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
const navLinkItems=document.querySelectorAll(".nav-link");
const menuIcon=toggleButton.querySelector("i");

toggleButton.addEventListener("click", ()=>{
  const visible=navLinks.style.display==="flex";
  if(visible)
     {
    navLinks.style.display = "none";
     menuIcon.classList.remove("fa-xmark"); 
    menuIcon.classList.add("fa-bars");
  } 
  else 
    {
    navLinks.style.display = "flex";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  }})

navLinkItems.forEach(link => {
  link.addEventListener("click",() =>
     {
    navLinks.style.display = "none";
     menuIcon.classList.remove("fa-xmark"); 
    menuIcon.classList.add("fa-bars");
  });
})


