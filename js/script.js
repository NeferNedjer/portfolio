const header = document.querySelector(".header");
const headerTitle = document.querySelector(".header-title");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".links");

let scrollFromTop = document.documentElement.scrollTop;
let isMenuOpen = false; // État de l'ouverture du menu

document.addEventListener("scroll", mouvementHeader);

function mouvementHeader(e) {
    // Si le menu est ouvert, on ne fait pas l'animation du header
    if (isMenuOpen) return;

    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > scrollFromTop) {
        console.log("scroll vers le bas");
        header.style.translate = `0 -${headerTitle.scrollHeight}px`;
        navbar.style.backgroundColor = "white";
        links.forEach(link => {
            link.style.color = "#000";
        });
    } else {
        console.log("scroll vers le haut");
        header.style.translate = `0 0px`;
        navbar.style.backgroundColor = "";
        links.forEach(link => {
            link.style.color = "white";
        });
    }
    scrollFromTop = document.documentElement.scrollTop;
}

document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("menu-toggle");
    let navbar = document.getElementById("ulnavbar");
    let links = document.querySelectorAll("#ulnavbar a");
    const navLinks = document.querySelectorAll(".links");

    // Ouvre/ferme le menu en cliquant sur le burger
    menuToggle.addEventListener("click", function () {
        isMenuOpen = !isMenuOpen; // Changer l'état de l'ouverture du menu
        navbar.classList.toggle("active");

        // Si le menu est ouvert, on désactive l'animation du header
        if (isMenuOpen) {
            header.style.transition = "none";// Désactivation de l'animation
            navLinks.forEach(link => {
                link.style.color = "white";
            });
        } else {
            header.style.transition = "all 0.5s ease-in-out"; // Réactivation de l'animation
        }
    });

    // Ferme le menu quand on clique sur un lien
    links.forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            isMenuOpen = false; // Le menu est fermé, donc on réactive l'animation du header
            header.style.transition = "all 0.5s ease-in-out"; // Réactivation de l'animation
        });
    });
});