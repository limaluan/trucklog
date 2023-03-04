/* Script para mostrar as respostas de cada pergunta do FAQ */
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", () => {
    coll[i].classList.toggle("active");
    let content = coll[i].nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
}

/* Script para mudar o ícone do collapsible */
const collapsibleList = document.querySelectorAll(".collapsible");
collapsibleList.forEach((collapsible) => {
  collapsible.addEventListener("click", () => {
    collapsible.firstElementChild.classList.toggle("bi-dash-lg");
    collapsible.firstElementChild.classList.toggle("bi-plus-lg");
  });
});
