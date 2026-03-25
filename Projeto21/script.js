const formWrapper = document.querySelector(".form-wrapper");
const loginButton = document.querySelector(".button-login");
const formClose = document.querySelector(".form-close");
const signupLink = document.querySelector("#signup-link");
const loginLink = document.querySelector("#login-link");
const eyeIcons = document.querySelectorAll(".eye-icon");

// Abrir o formulário
loginButton.addEventListener("click", () => {
  formWrapper.classList.add("show");
});

// Fechar o formulário
formClose.addEventListener("click", () => {
  formWrapper.classList.remove("show");
});

// Ir para o formulário de cadastro
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  formWrapper.classList.add("show-signup");
});

// Voltar para o formulário de login
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  formWrapper.classList.remove("show-signup");
});

// Lógica para mostrar/esconder a senha
eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    // Encontra o input de senha irmão do ícone
    const passwordInput = eyeIcon.previousElementSibling;
    
    // Troca o tipo do input e a classe do ícone
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.replace("bx-hide", "bx-show");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    }
  });
});