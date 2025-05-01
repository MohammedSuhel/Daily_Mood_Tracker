const historyList = document.getElementById("mood-history");

function setMood(mood, colorVar) {
  const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
  document.body.style.backgroundColor = color;

  const li = document.createElement("li");
  const date = new Date().toLocaleString();
  li.textContent = `${date} - ${mood}`;
  historyList.prepend(li);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    document.body.style.backgroundColor = "var(--dark-bg)";
    document.body.style.color = "#eee";
  } else {
    document.body.style.backgroundColor = "var(--light-bg)";
    document.body.style.color = "#333";
  }
}
