/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close menu after clicking a link */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10, 10, 10, 0.95)";

    } else {

        navbar.style.background = "rgba(10, 10, 10, 0.85)";

    }

});


/* =========================
   SIMPLE SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .service-card, .project-card, .skill-group, .certificate-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});