window.onload = () => {
  // let result = await fetchAnimals();
  // console.log(result);
  animalsRandom();
  configuraBotoes();
}

function configuraBotoes() {
  const botaoCat = document.querySelector('.cat');
  const botaoDog = document.querySelector('.dog');
  botaoCat.addEventListener('click', () => getAnimals('Cat'));
  botaoDog.addEventListener('click', () => getAnimals('Dog'));
}

function createCustomElement(tag, theClass, content) {
  const element = document.createElement(tag);
  element.className = theClass;
  if (content) element.innerHTML = content;
  return element;
}

function photoLocalizer(photo) {
  return photo ? photo.small : 'https://c.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif';
}

function generateAnimalElements(animal) {
  const animalsList = document.querySelector('.available-animals');
  const { name, age, gender, breeds, pagination, primary_photo_cropped } = animal;
  const animalElement = createCustomElement('li', 'animal-container');
  const img = createCustomElement('img', 'animal-image');
  img.src = photoLocalizer(primary_photo_cropped);

  animalElement.appendChild(img)
  animalElement.appendChild(createCustomElement('p', 'animal-name', `<strong>Nome:</strong> ${name}`));
  animalsList.appendChild(animalElement);
}

function listAnimals(list) {
  const { animals, pagination } = list;
  animals.forEach(generateAnimalElements);
}

async function getAnimals(specie) {
  const result = await fetchAnimals(specie);
  listAnimals(result)
}

// Random Animals 


const animalsRandom = () => {
  const random = (maxNumber) => Math.floor(Math.random() * maxNumber) + 1;

  const dog = document.querySelector('#dog');
  const cat = document.querySelector('#cat');
  const others = document.querySelector('#others');

  const dogRandom = random(10);
  const catRandom = random(10);
  const othersRandom = random(10);

  dog.setAttribute('src', `images/pet-dog-${dogRandom}.png`);
  cat.setAttribute('src', `images/pet-cat-${catRandom}.png`);
  others.setAttribute('src', `images/pet-other-${othersRandom}.png`);
}
