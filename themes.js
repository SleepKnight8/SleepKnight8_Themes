function setTheme(theme) {

    document.body.classList.remove(
        "sk-yellow",
        "sk-purple"
    );

    if (theme === "purple") {

        document.body.classList.add("sk-purple");

    }

    localStorage.setItem(
        "SleepKnight8Theme",
        theme
    );
}


/* Load saved theme */

const savedTheme =
    localStorage.getItem("SleepKnight8Theme");

if (savedTheme === "purple") {

    setTheme("purple");

} else {

    setTheme("yellow");

}
