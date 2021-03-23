const botao = document.getElementById('facebook-register');
const botaoLogin = document.getElementById('button-login');
const personalizadoRadio = document.getElementById('personalizado');
const personalizado = document.getElementById('genero-personalizado');
const campo = document.getElementById('campos-invalidos');
const rightForm = document.querySelector('.right-content');

function initalizeApp() {
  botaoLogin.addEventListener('click', alertEmail);
  botao.addEventListener('click', checarCampo);
  personalizadoRadio.addEventListener('click', mostrarElemento);
  botao.addEventListener('click', mostrarElemento);
};

function mostrarElemento() {
  personalizado.style.display = 'flex';
}

function checarCampo() {
  const nome = document.getElementById('nomeLogin').value;
  const sobrenome = document.getElementById('sobrenomeLogin').value;
  const telefone = document.getElementById('telefoneLogin').value;
  const nascimento = document.getElementById('nascimentoLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  const elementos = [nome, sobrenome, telefone, nascimento, senha];
  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index] === '') {
      campo.style.display = 'flex';
      campo.innerText = 'Campos inválidos';
      break;
    }
  }
  if (campo.innerText != 'Campos inválidos') {
    userLoged();
  }
}

function alertEmail() {
  alert(`${document.getElementById('user-email-phone').value}`);
}

function userLoged() {
  const formInputs = document.querySelectorAll('.input-cadastro');
  const fullName = document.createElement('h1');
  fullName.innerText = `Olá, ${formInputs[0].value} ${formInputs[1].value}`;
  const emailPhone = document.createElement('p');
  emailPhone.innerText = formInputs[2].value;
  const birthday = document.createElement('p');
  birthday.innerText = formInputs[4].value;
  const genderUser = document.createElement('p');
  let valorR = document.querySelector('input[type="radio"]:checked').value;
  genderUser.innerText = valorR;
  rightForm.innerHTML = '';
  rightForm.appendChild(fullName);
  rightForm.appendChild(emailPhone);
  rightForm.appendChild(birthday);
  rightForm.appendChild(genderUser);
}

initalizeApp();