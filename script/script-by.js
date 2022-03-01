let menuLateral = () => {
    let x = document.getElementById("menuNavBar");
    if (x.className === "menuNavBar") {
        x.className += " responsive";
    } else {
        x.className = "menuNavBar";
    }
}