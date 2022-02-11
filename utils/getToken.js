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
  const { access_token } = await response.json();
  return access_token;
};
