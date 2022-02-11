window.onload = () => {
  // let result = await fetchAnimals();
  // console.log(result);
  animalsRandom();
  configuraBotoes();
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

// Random Animals 


const animalsRandom = () => {
  
  const dog = document.querySelector('#dog')
  const cat = document.querySelector('#cat')
  const others = document.querySelector('#others')

  const random = (maxNumber) => Math.floor(Math.random() * maxNumber) + 1
  const dogRandom = random(10)
  const catRandom = random(10)
  const othersRandom = random(10)

  dog.setAttribute('src', `images/pet-dog-${dogRandom}.png`)
  cat.setAttribute('src', `images/pet-cat-${catRandom}.png`)
  others.setAttribute('src', `images/pet-other-${othersRandom}.png`)
}
