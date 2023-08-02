const input = document.querySelector("input.user-input");
const btn = document.querySelector("button.toggle-button");

btn.addEventListener("click", function togglePassword() {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
