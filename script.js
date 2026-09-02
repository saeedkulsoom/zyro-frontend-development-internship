// Rotating "right now" line — small personal touch
const statuses = [
  "right now: probably debugging a React component",
  "right now: watching a K-drama",
  "right now: trying a new Pakistani recipe",
  "right now: teaching a model to see (YOLOv8)",
  "right now: pushing something to GitHub",
];

const statusText = document.getElementById("statusText");
let statusIndex = 0;

setInterval(() => {
  statusIndex = (statusIndex + 1) % statuses.length;
  statusText.style.opacity = 0;

  setTimeout(() => {
    statusText.textContent = statuses[statusIndex];
    statusText.style.opacity = 1;
  }, 300);
}, 3200);

// Email button reveals the address instead of hiding it behind mailto only
const emailBtn = document.getElementById("emailBtn");
const emailOutput = document.getElementById("emailOutput");
const email = "kulsoom666saeed@gmail.com";

emailBtn.addEventListener("click", () => {
  emailOutput.textContent = `✔ ${email} — copied to clipboard`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).catch(() => {
      emailOutput.textContent = email;
    });
  }

  console.log("Email button clicked: address shown to user.");
});
