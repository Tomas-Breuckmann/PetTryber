const getTokenResponse = require('./objExamples/token');
const fetchAnimalsResponse = require('./objExamples/animals');
const fetchPetResponse = require('./objExamples/pet');

module.exports = () => {
  fetch.addRoute('https://api.petfinder.com/v2/oauth2/token', {
    post: {
      response: getTokenResponse
    }
  });

  // dog
  fetch.addRoute(`https://api.petfinder.com/v2/animals?type=dog`, {
    get: {
      response: fetchAnimalsResponse
    }
  })
  // cat
  fetch.addRoute(`https://api.petfinder.com/v2/animals?type=cat`, {
    get: {
      response: fetchAnimalsResponse
    }
  })

  fetch.addRoute(`https://api.petfinder.com/v2/animals/124`, {
    get: {
      response: fetchPetResponse
    }
  })

  global.fetch = jest.fn(fetch);
  afterEach(jest.clearAllMocks);  

  global.btoa = (text) => {
    return Buffer.from(text, 'binary').toString('base64');
  };
}
