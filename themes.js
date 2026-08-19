/* =====================================================
   SleepKnight8 Themes
   Global Theme System
   ===================================================== */

const THEME_KEY = "SleepKnight8Theme";

const THEMES = [
    "yellow",
    "purple"
];


function setTheme(theme) {

    if (!THEMES.includes(theme)) {
        theme = "yellow";
    }

    document.body.classList.remove(
        ...THEMES.map(
            name => `sk-${name}`
        )
    );

    document.body.classList.add(
        `sk-${theme}`
    );

    localStorage.setItem(
        THEME_KEY,
        theme
    );
}


function loadTheme() {

    const savedTheme =
        localStorage.getItem(THEME_KEY);

    setTheme(
        THEMES.includes(savedTheme)
            ? savedTheme
            : "yellow"
    );
}


loadTheme();
