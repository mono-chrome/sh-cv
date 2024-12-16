export function getDarkCookie() {
  const cookie = document.cookie.split("darkMode=")[1];
  const value = cookie?.split(";")[0];

  return value || "dark";
}

export function setDarkCookie(value) {
  document.cookie = `darkMode=${value} ;path=/`;
}
