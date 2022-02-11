window.onload = () => {
  // let result = await fetchAnimals();
  // console.log(result);
  configuraBotoes()
}

function configuraBotoes() {
  const botaoCat = document.querySelector('.cat');
  const botaoDog = document.querySelector('.dog');
  botaoCat.addEventListener('click', () => listAnimals('Cat'))
  botaoDog.addEventListener('click', () => listAnimals('Dog'))
}

async function listAnimals(specie) {
  const result = await fetchAnimals(specie);
  const lista = Array.from(result.animals)
  // console.log(lista);
}