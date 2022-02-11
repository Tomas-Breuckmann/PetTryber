async function fetchAnimals(specie) {
  const token = await getToken()
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    
    }
  };
  
    const url = (specie === 'Other' ? 'https://api.petfinder.com/v2/animals': `https://api.petfinder.com/v2/animals?type=${specie}`);

    const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
}
