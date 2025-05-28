const scriptURL = "https://script.google.com/macros/s/AKfycbyj3qeeHM_h0MKCdKTqiiQyy8i_1YEUAVNI5i8jVWtXsli2Fb3rMvAzg7Yr6nzGj15Z2w/exec";

function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  fetch(`${scriptURL}?action=register&nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`)
    .then(res => res.text())
    .then(msg => {
      alert(msg);
      if (msg.includes("sucesso")) window.location.href = "index.html";
    });
}

function loginUsuario() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  fetch(`${scriptURL}?action=login&email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`)
    .then(res => res.text())
    .then(msg => {
      if (msg.includes("sucesso")) {
        alert("Login realizado com sucesso!");
        window.location.href = "dashboard.html";
      } else {
        alert("Login falhou: " + msg);
      }
    });
}
