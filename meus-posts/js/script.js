const users = document.getElementById('usuario');
let person = document.getElementById('usua').value;
async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(String(person));

  data.map((user) => {
    const div = document.createElement('div');
    const name = document.createElement('h2');
    const email = document.createElement('span');
    const username = document.createElement('p1');
    const company = document.createElement('p3');
    const company2 = document.createElement('p4');
    const company3 = document.createElement('p5');

    name.innerText = user.name;
    username.innerText = `@${user.username}`;
    email.innerText = `${user.email}`;
    company.innerText = `${user.company.bs}`;
    company2.innerText = `"${user.company.catchPhrase}"`;
    company3.innerText = `Empresa: ${user.company.name}`;

    div.appendChild(email);
    div.appendChild(username);
    div.appendChild(name);
    div.appendChild(company3);
    div.appendChild(company);
    div.appendChild(company2);

    users.appendChild(div);
  });
}
getAllUsers();

async function pesquisarUser() {
  if (person === '') {
    users.innerHTML = ``;
  }
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(document.getElementById('usua').value);

  console.log(response);
  const data = await response.json();
  console.log(data);
  let pessoa = document.getElementById('usua').value;
  data.map((user) => {
    if (pessoa.toLowerCase() === user.username.toLowerCase()) {
      const div = document.createElement('div');
      const name = document.createElement('h2');
      const email = document.createElement('span');
      const username = document.createElement('p1');
      const company = document.createElement('p3');
      const company2 = document.createElement('p4');
      const company3 = document.createElement('p5');

      name.innerText = user.name;
      username.innerText = `@${user.username}`;
      email.innerText = `${user.email}`;
      company.innerText = `${user.company.bs}`;
      company2.innerText = `"${user.company.catchPhrase}"`;
      company3.innerText = `Empresa: ${user.company.name}`;

      div.appendChild(email);
      div.appendChild(username);
      div.appendChild(name);
      div.appendChild(company3);
      div.appendChild(company);
      div.appendChild(company2);

      users.appendChild(div);
    } else {
      return 0;
    }
  });
}
pesquisarUser();
