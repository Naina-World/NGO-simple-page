const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
   navLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {

    if(
        !menuBtn.contains(e.target) &&
        !navLinks.contains(e.target)
    ){
        navLinks.classList.remove("active");
    }

});

const heroBtn = document.getElementById("heroBtn");

heroBtn.addEventListener("click", () => {
    alert("Thank you for supporting She Can Foundation!");
});

const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", () => {

    alert("Together we can empower lives and create change!");

});

const cards = document.querySelectorAll(".service-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message sent successfully!");

    contactForm.reset();

});

const socialIcons = document.querySelectorAll(".social-icons a");

socialIcons.forEach((icon) => {

    icon.addEventListener("mouseenter", () => {
        icon.style.cursor = "pointer";
    });

});