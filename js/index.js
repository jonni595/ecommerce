const menu = document.getElementById("MenuItems");
menu.style.maxHeight = "0px";

const menuToggle = () => {
    (menu.style.maxHeight = "0px")
    ? menu.style.maxHeight = "200px"
    : menu.style.maxHeight = "0px";
}