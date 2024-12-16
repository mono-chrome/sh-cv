import { getDarkCookie, setDarkCookie } from "./cookies";

export function applyDarkMode() {
  const dSet = document.documentElement.dataset;
  //const storedMode = localStorage.getItem("darkMode") || "dark";
  const darkMode = getDarkCookie();

  dSet.mode = darkMode;
}

export function toggleDarkMode() {
  const dSet = document.documentElement.dataset;
  const $b = document.body.classList;
  const newMode = dSet.mode === "light" ? "dark" : "light";

  $b.add("transition-colors", "duration-200");
  dSet.mode = newMode;
  //localStorage.setItem("darkMode", newMode);
  setDarkCookie(newMode);
}
