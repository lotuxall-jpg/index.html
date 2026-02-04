function login() {
  const user = document.getElementById("username").value;
  if (!user) return;

  localStorage.setItem("user", user);
  document.getElementById("login").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}
