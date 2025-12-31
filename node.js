const characters = [
  {
    id: "belafera",
    text: "Eu demorei pra entender"
  },
  {
    id: "rapunzel",
    text: "Mas quando penso em você, tudo fica simples"
  },
  {
    id: "aladdin",
    text: "Porque no fim, o meu lugar é ao seu lado"
  }
];

let current = 0;

const cardText = document.getElementById("cardText");

setInterval(() => {
  // remove ativo
  document
    .getElementById(characters[current].id)
    .classList.remove("active");

  // próximo
  current = (current + 1) % characters.length;

  // adiciona ativo
  const nextChar = document.getElementById(characters[current].id);
  nextChar.classList.add("active");

  // troca texto
  cardText.textContent = characters[current].text;

}, 5000);
