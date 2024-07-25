const confirmation = document.getElementById("confirmation");
const subscribe = document.getElementById("subscribe");
const emailError = document.getElementById("error-label");
const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss");
const input = document.getElementById("email");

confirmation.style.display = "none";
emailError.style.display = "none";

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const emailValue = input.value;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(emailValue)) {
    emailError.style.display = "none";
    confirmation.style.display = "block";
    subscribe.style.display = "none";
  } else {
    emailError.style.display = "block";
    emailError.textContent = "Please enter a valid email address.";
  }
});

dismissBtn.addEventListener("click", function () {
  confirmation.style.display = "none";
  subscribe.style.display = "flex";
});
