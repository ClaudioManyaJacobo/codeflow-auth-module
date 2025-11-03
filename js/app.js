(() => {
  const form = document.getElementById('loginForm');
  const msg = document.getElementById('msg');

  const showMessage = (text, type = "error") => {
    msg.textContent = text;
    msg.style.color = type === "error" ? "red" : "green";
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username.length < 3) {
      showMessage("El usuario debe tener al menos 3 caracteres");
      return;
    }

    if (password.length < 6) {
      showMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    showMessage("Datos válidos, procesando...", "success");
  });
})();