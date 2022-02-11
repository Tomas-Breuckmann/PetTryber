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

function creatListAnimals(pet) {
  const petLi = document.createElement('li');
  const petImg = document.createElement('img');
  const petName = document.createElement('p');
  const petBreed = document.createElement('p');
  const petGender = document.createElement('p');
  if (pet.primary_photo_cropped) petImg.src = pet.primary_photo_cropped.small;
  petName.innerHTML = `Nome: ${pet.name}`;
  petBreed.innerHTML = `Raça: ${pet.breeds.primary}`;
  petGender.innerHTML = `Sexo: ${pet.gender}`;
  petLi.appendChild(petImg);
  petLi.appendChild(petName);
  petLi.appendChild(petBreed);
  petLi.appendChild(petGender);
  return petLi;
}

async function listAnimals(specie) {
  const result = await fetchAnimals(specie);
  const lista = Array.from(result.animals)
  const petOl = document.querySelector('.list-pet');
  console.log(lista);
  lista.forEach((pet) => {
    console.log('nome ', pet.name);
    console.log('sexo ', pet.gender);
    console.log('raça ', pet.breeds.primary);
    if (pet.primary_photo_cropped) console.log('imagem ', pet.primary_photo_cropped.small);
    petOl.appendChild(creatListAnimals(pet));
  });
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
