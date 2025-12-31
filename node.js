const body = document.body;
const casal = document.getElementById("casal");
const textoCarta = document.getElementById("textoCarta");
const effects = document.getElementById("effects");
const musica = document.getElementById("musica");

let etapa = 0;
let intervaloTexto = null;

/* TEXTOS */
const cartas = {
  rapunzel: "Eu não sou muito bom com discursos, mas quando penso em você, tudo fica simples, mesmo longe, eu sei exatamente onde quero estar, é ao seu lado. Se tiver uma luz acesa em algum lugar, eu vou seguir até ela, porque no fim, sempre acaba sendo você.",

  aladdin: "Eu não tenho promessas grandiosas, nem um castelo pra te mostrar, mas se você quiser ir mais alto, eu vou com você. Se quiser só sentir o vento e esquecer o mundo por um instante, eu seguro sua mão e não solto.",

  bela: "Eu demorei pra entender o que é amar de verdade, mas agora eu sei, é cuidar, é proteger, é ficar mesmo quando é difícil. Que você esteja em paz, que esteja segura, e que nunca duvide, o meu coração é seu, EU TE AMO. Feliz Ano Novo.",
};

/* MÚSICAS */
const trilhas = {
  rapunzel: "audio/rapunzel.mp3",
  aladdin: "audio/aladdin.mp3",
  bela: "audio/belafera.mp3"
};

/* TEXTO DIGITADO (SEM BUG) */
function digitar(texto) {
  clearInterval(intervaloTexto);
  textoCarta.innerHTML = "";
  let i = 0;

  intervaloTexto = setInterval(() => {
    textoCarta.innerHTML += texto.charAt(i);
    i++;
    if (i >= texto.length) {
      clearInterval(intervaloTexto);
    }
  }, 40);
}

/* EFEITOS */
function limparEfeitos() {
  effects.innerHTML = "";
}

function criarEfeitos(qtd) {
  for (let i = 0; i < qtd; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.animationDelay = -(Math.random() * 10) + "s";
    effects.appendChild(s);
  }
}

/* MÚSICA */
function tocarMusica(src) {
  musica.pause();
  musica.currentTime = 0;
  musica.src = src;
  musica.play();
}

/* TROCA */
function trocar() {
  limparEfeitos();

  if (etapa === 0) {
    body.className = "aladdin";
    casal.src = "img/aladdin.png";
    digitar(cartas.aladdin);
    criarEfeitos(20);
    tocarMusica(trilhas.aladdin);
    etapa = 1;

  } else if (etapa === 1) {
    body.className = "bela";
    casal.src = "img/belafera.png";
    digitar(cartas.bela);
    criarEfeitos(30);
    tocarMusica(trilhas.bela);
    etapa = 2;

  } else {
    body.className = "rapunzel";
    casal.src = "img/rapunzel.png";
    digitar(cartas.rapunzel);
    criarEfeitos(35);
    tocarMusica(trilhas.rapunzel);
    etapa = 0;
  }
}

casal.addEventListener("click", trocar);

/* INICIAL */
body.className = "rapunzel";
casal.src = "img/rapunzel.png";
criarEfeitos(35);
digitar(cartas.rapunzel);
tocarMusica(trilhas.rapunzel);