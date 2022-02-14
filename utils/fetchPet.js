async function fetchPet(petId) {
  const token = await getToken()
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const url = `https://api.petfinder.com/v2/animals/${petId}`;
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data;
}

if (typeof module !== 'undefined') {
  module.exports = fetchPet;
}
