const header = document.querySelector(".header");
const headerTitle = document.querySelector(".header-title");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".links");

console.log(links);
let scrollFromTop = document.documentElement.scrollTop;

document.addEventListener("scroll", mouvementHeader);

function mouvementHeader(e) {
    const currentScroll = document.documentElement.scrollTop;

    if(currentScroll > scrollFromTop) {
        console.log("scroll vers le bas");
        header.style.translate = `0 -${headerTitle.scrollHeight}px`;
        navbar.style.backgroundColor = "white";
        links.forEach(link => {
            link.style.color = "#333"; 
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