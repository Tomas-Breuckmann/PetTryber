async function fetchAnimals(specie) {
  const token = await getToken()
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    
    }
  };

  const url = `https://api.petfinder.com/v2/animals?type=${specie}`;
  // const url = `https://api.petfinder.com/v2/types/dog`;
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
}
