const iconShowPassword = document.getElementById("icon-show-password");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirm-password");
const checkBoxShowPassword = document.querySelector('input[type="checkbox"]');

const showPassword = () => {
  if (inputConfirmPassword.getAttribute("type") == "password") {
    iconShowPassword.className = "bi bi-eye";
    checkBoxShowPassword.checked = true;
    inputPassword.setAttribute("type", "text");
    inputConfirmPassword.setAttribute("type", "text");
  } else {
    iconShowPassword.className = "bi bi-eye-slash";
    checkBoxShowPassword.checked = false;
    inputPassword.setAttribute("type", "password");
    inputConfirmPassword.setAttribute("type", "password");
  }
};

iconShowPassword.addEventListener("click", showPassword);
checkBoxShowPassword.addEventListener("click", showPassword);
