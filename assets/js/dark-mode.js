document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";
  const moonImg = themeButton.querySelector(".switch-moon");
  const sunImg = themeButton.querySelector(".switch-sun");

  const applyTheme = (isDark) => {
    document.body.classList.toggle(darkTheme, isDark);

    if (isDark) {
      moonImg.classList.add("hidden");
      sunImg.classList.remove("hidden");
    } else {
      moonImg.classList.remove("hidden");
      sunImg.classList.add("hidden");
    }

    localStorage.setItem("selected-theme", isDark ? "dark" : "light");
  };

  // Carica tema salvato
  const selectedTheme = localStorage.getItem("selected-theme");
  applyTheme(selectedTheme === "dark");

  // Toggle tema
  themeButton.addEventListener("click", () => {
    const isDark = !document.body.classList.contains(darkTheme);
    applyTheme(isDark);
  });
});
