window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("login").classList.remove("hidden");
    home();
  }, 1500);
});
