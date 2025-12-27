function scrollToLogin() {
  document.getElementById("login").scrollIntoView({ behavior: "smooth" });
}

function login() {
  const name = document.getElementById("name").value;
  if (!name) {
    alert("Please enter your name");
    return;
  }

  document.getElementById("welcome").innerText =
    "Welcome, " + name + " 👋";

  document.getElementById("login").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function showTasks() {
  hideAll();
  document.getElementById("tasks").classList.remove("hidden");
}

function showWallet() {
  hideAll();
  document.getElementById("wallet").classList.remove("hidden");
}

function showAbout() {
  hideAll();
  document.getElementById("about").classList.remove("hidden");
}

function hideAll() {
  document.getElementById("tasks").classList.add("hidden");
  document.getElementById("wallet").classList.add("hidden");
  document.getElementById("about").classList.add("hidden");
}

function submitTask() {
  alert("Task submitted for demo review");
}
