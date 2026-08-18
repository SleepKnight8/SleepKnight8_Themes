function setTheme(theme) {

    if (theme === "purple") {
        document.body.classList.add("purple");
        localStorage.setItem("theme", "purple");
    }

    else {
        document.body.classList.remove("purple");
        localStorage.setItem("theme", "yellow");
    }
}


// Load saved theme

const theme = localStorage.getItem("theme");

if (theme === "purple") {
    setTheme("purple");
} else {
    setTheme("yellow");
}
