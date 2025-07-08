function choose(path) {
  const story = document.getElementById("story");
  const choices = document.getElementById("choices");

  if (path === "esquerda") {
    story.textContent = "Você encontra um lago mágico. Um espírito da floresta oferece um desejo.";
    choices.innerHTML = `
      <button onclick="choose('desejo')">Pedir um desejo ✨</button>
      <button onclick="choose('fugir')">Fugir assustado 😱</button>
    `;
  } else if (path === "direita") {
    story.textContent = "Você encontra uma caverna escura. Algo brilha lá dentro.";
    choices.innerHTML = `
      <button onclick="choose('entrar')">Entrar na caverna 🔦</button>
      <button onclick="choose('voltar')">Voltar para o início 🔁</button>
    `;
  } else if (path === "desejo") {
    story.textContent = "Seu desejo se realiza! Você se torna o guardião da floresta.";
    choices.innerHTML = `<button onclick="location.reload()">Jogar novamente 🔄</button>`;
  } else if (path === "fugir") {
    story.textContent = "Você corre e tropeça em uma raiz. A floresta te envolve e você adormece novamente.";
    choices.innerHTML = `<button onclick="location.reload()">Tentar de novo 🔄</button>`;
  } else if (path === "entrar") {
    story.textContent = "Dentro da caverna, você encontra um tesouro perdido há séculos!";
    choices.innerHTML = `<button onclick="location.reload()">Explorar outra vez 🔄</button>`;
  } else if (path === "voltar") {
    story.textContent = "Você retorna ao ponto inicial. Dois caminhos se abrem novamente.";
    choices.innerHTML = `
      <button onclick="choose('esquerda')">Ir pela trilha da esquerda 🌲</button>
      <button onclick="choose('direita')">Seguir pela trilha da direita 🌳</button>
    `;
  }
}
