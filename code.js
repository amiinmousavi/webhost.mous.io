const setup = () => {
    const menu = document.getElementById("menu");
    menu.addEventListener("click", clickMenu)

}


const clickMenu = () => {
    let menu = document.getElementById("menu");
    let activeCheck = menu.classList[menu.classList.length-1];

    let navMenu = document.getElementById("nav-menu")
    if (activeCheck.localeCompare("active") === 0) {
        navMenu.style.visibility="visible";
    } else {
        navMenu.style.visibility = "hidden";
    }
}

window.addEventListener("load", setup);