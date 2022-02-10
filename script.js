const CLIENT_ID = 'JUw2D6AHPZitMCWGpJztnJPZ2843hIKsQeGCXU2759pPV0QbEL'
const CLIENT_SECRET = '1Dd28hLeQQwcMdhAGRxmBxXyw8H4Y75EWAVL4U13'

async function getToken() {
  const requestInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    },
    body: 'grant_type=client_credentials',
  };

  const response = await fetch('https://api.petfinder.com/v2/oauth2/token', requestInfo);
  const data = await response.json();
  return data.access_token;
};

async function fetchAnimals() {
  const token = await getToken()
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const url = `https://api.petfinder.com/v2/animals`;
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  console.log(data);
}

window.onload = () => {
  fetchAnimals()
}
