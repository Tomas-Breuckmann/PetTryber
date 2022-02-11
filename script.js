window.onload = () => {
  // let result = await fetchAnimals();
  // console.log(result);
  configuraBotoes()
}

function configuraBotoes() {
  const botaoCat = document.querySelector('.cat');
  const botaoDog = document.querySelector('.dog');
  const botaoOther = document.querySelector('.other');
  botaoCat.addEventListener('click', () => listAnimals('Cat'))
  botaoDog.addEventListener('click', () => listAnimals('Dog'))
  botaoOther.addEventListener('click', () => listAnimals('Other'))
}

async function listAnimals(specie) {
  const result = await fetchAnimals(specie);
  const lista = Array.from(result.animals);
  console.log(lista);
}