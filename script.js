window.onload = () => {
  // let result = await fetchAnimals();
  // console.log(result);
  animalsRandom();
  configuraBotoes();
}

let currentAnimal;

const getElementOrClosest = (sectionClass, target) => 
  target.classList.contains(sectionClass)
    ? target
    : target.closest(sectionClass);

function showLoadingAlert() {
  const frameLoading = document.getElementById('loading');
  const loadingAlert = document.createElement('span');
  loadingAlert.className = 'loading';
  loadingAlert.innerText = 'carregando...';
  frameLoading.appendChild(loadingAlert);
}

function notShowLoadingAlert() {
  const frameLoading = document.getElementById('loading');
  const loadingAlert = document.querySelector('.loading');
  frameLoading.removeChild(loadingAlert);
}

function configuraBotoes() {
  const botaoCat = document.querySelector('#options-cat');
  const botaoDog = document.querySelector('#options-dog');
  botaoCat.addEventListener('click', () => getAnimals('Cat'));
  botaoDog.addEventListener('click', () => getAnimals('Dog'));
}

const clearSelectedItem = (containerSelector) => {
  const element = document.querySelector(`${containerSelector}`);

  if (element) {
    element.classList.remove(containerSelector.substring(1, containerSelector.length));
  }
};

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
  const { id, name, age, gender, breeds, pagination, primary_photo_cropped } = animal;
  const animalElement = createCustomElement('li', 'animal-container');
  const img = createCustomElement('img', 'animal-image');
  img.src = photoLocalizer(primary_photo_cropped);

  animalElement.id = animal.id;
  animalElement.appendChild(img);
  animalElement.appendChild(createCustomElement('p', 'animal-name', `Nome: <strong>${name.substring(0,15)}</strong>`));
  animalElement.appendChild(createCustomElement('p', 'animal-breed', `Raça: <strong>${breeds.primary.substring(0,20)}</strong>`));
  animalElement.appendChild(createCustomElement('p', 'animal-gender', `Sexo: <strong>${gender}</strong>`));
  animalElement.addEventListener('click', getPet);
  animalsList.appendChild(animalElement);
}

function clearList() {
  const animalsList = document.querySelector('.available-animals');
  animalsList.style.opacity = '0';
  setTimeout(() => {
    animalsList.innerHTML = '';
    animalsList.style.opacity = '100';
  }, 1000);
}

function listAnimals(list, clearMode) {
  const { animals, pagination } = list;
  if (clearMode) clearList();
  setTimeout(() => {
    animals.forEach(generateAnimalElements);
    showMoreButton(pagination.current_page);
  }, 1000);
  ;
}

async function showMoreAnimals(event) {
  showLoadingAlert();
  const specie = currentAnimal
  const page = `page=${event.target.id}`
  event.target.remove()
  document.getElementById('para-o-topo').remove();
  const result = await fetchAnimals(`${specie}&${page}`);
  notShowLoadingAlert();
  listAnimals(result);
}

function showMoreButton(currentPage) {
  const animalsList = document.querySelector('.available-animals');
  const nextPage = currentPage + 1
  const button = createCustomElement('span', 'more-animals-button', 'Mostrar mais')
  const upButton = createCustomElement('a', 'up-button', '<ion-icon name="arrow-up"></ion-icon>')
  button.id = nextPage;
  upButton.id = 'para-o-topo';
  upButton.href ='#topo-pagina';
  button.addEventListener('click', showMoreAnimals);
  animalsList.appendChild(button);
  animalsList.appendChild(upButton);
}

// em produção
async function getPet({ target }) {
  showLoadingAlert();
  const petSelected = getElementOrClosest('.animal-container', target);
  const petId = petSelected.id;
  const result = await fetchPet(petId);
  console.log(result);
  notShowLoadingAlert();
}

async function getAnimals(specie) {
  const selectedSpecie = document.querySelector(`#options-${specie.toLowerCase()}`);
  clearSelectedItem('.item-selected')
  selectedSpecie.classList.add('item-selected');
  if (currentAnimal !== specie) {
    showLoadingAlert();
    currentAnimal = specie;
    const result = await fetchAnimals(specie);
    listAnimals(result, true);
    notShowLoadingAlert();
  }
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
