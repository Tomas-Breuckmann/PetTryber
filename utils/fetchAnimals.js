async function fetchAnimals(specie) {
  const token = await getToken()
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    
    }
  };
  if (specie === 'Other') {
    console.log('other escolhido');
    const url = 'https://api.petfinder.com/v2/animals?type=Rabbit';
  } else {
    console.log(`${specie} escolhida`);
  const url = `https://api.petfinder.com/v2/animals?type=${specie}`;
}
  // const url = 'https://api.petfinder.com/v2/animals?type=Rabbit;
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
}
