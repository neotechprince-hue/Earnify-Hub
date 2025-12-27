function scrollToLogin() {
  document.getElementById("login").scrollIntoView({ behavior: "smooth" });
}

function googleLogin() {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("welcome").innerText =
    "Welcome, Demo Google User 👋";
}

function mobileLogin() {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("welcome").innerText =
    "Welcome, Mobile User 👋";
}

function showAds() {
  document.getElementById("ads").classList.remove("hidden");
}
