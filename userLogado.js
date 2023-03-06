const loginBtn = document.getElementById('login-btn');
const userName = document.getElementById('user-name');
const dropdownUser = document.getElementById('dropdown-user');

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

if (userLogado != null) {
  loginBtn.style.display = 'none';
  dropdownUser.style.display = 'block';
  userName.innerHTML = userLogado.nome;
  console.log('AAA');
  function verificarLogin() {
    window.location.href =
      'http://127.0.0.1:5500/trucklog/meus-posts/index.html';
  }
} else {
  loginBtn.style.display = 'block';
  dropdownUser.style.display = 'none';
  function verificarLogin() {
    window.location.href = 'http://127.0.0.1:5500/trucklog/login/index.html';
  }
}
