const email = document.getElementById('userEmail');
const nameUser = document.getElementById('userName');
const mensagens = document.getElementById('messages');
const comentario = document.getElementById('comment');
const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = date.toLocaleDateString('PT-BR', { month: 'long' });

function postComment() {
  console.log(month);
  if (nameUser.value === '') {
    return alert('Digite o Nome !');
  } else if (email.value === '') {
    return alert('Digite o Email !');
  } else {
    document.getElementById('messages').style.backgroundColor = ' #204945';
    document.getElementById('hide').style.backgroundColor = 'red';
    document.getElementById('postName').style.borderBottom =
      ' 1px solid #3cbd96';
    document.getElementById('postName').innerHTML = `${nameUser.value}`;
    document.getElementById(
      'dataPost'
    ).innerHTML = `${day} de ${month} ${year}`;
    document.getElementById('postEmail').innerHTML = ` ${email.value}`;
    document.getElementById('postComent').innerHTML = `"${comentario.value}"`;
  }
}

function cleanComent() {
  document.getElementById('messages').style.backgroundColor = 'white';
  document.getElementById('hide').style.backgroundColor = 'white';
  document.getElementById('postName').style.borderBottom = ' white';
  document.getElementById('postName').innerHTML = ``;
  document.getElementById('dataPost').innerHTML = ``;
  document.getElementById('postEmail').innerHTML = ` `;
  document.getElementById('postComent').innerHTML = ``;
}
