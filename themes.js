/* =====================================================
   SleepKnight8 Theme System
   ===================================================== */

function setTheme(theme) {

    if (theme !== "yellow" && theme !== "purple") {
        theme = "yellow";
    }

    document.body.classList.remove(
        "sk-yellow",
        "sk-purple"
    );

    document.body.classList.add(
        "sk-" + theme
    );

    localStorage.setItem(
        "SleepKnight8Theme",
        theme
    );
}


/* =====================================================
   LOAD SAVED THEME
   ===================================================== */

const savedTheme =
    localStorage.getItem("SleepKnight8Theme");

setTheme(
    savedTheme === "purple"
        ? "purple"
        : "yellow"
);
