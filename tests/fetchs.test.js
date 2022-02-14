// Preparação do fetch
global.fetch = require('fetch-simulator');
const prepareFetch = require('./prepareFetch');
prepareFetch();

// Importação das funções utilizadas
global.getToken = require("../utils/getToken");
const fetchAnimals = require('../utils/fetchAnimals');
const fetchPet = require('../utils/fetchPet')

// Importação dos objetos de exemplo
const getTokenResponse = require('./objExamples/token');
const fetchAnimalsResponse = require('./objExamples/animals');
const fetchPetResponse = require('./objExamples/pet');

// Início dos testes
describe('A função "getToken" deve funcionar corretamente', () => {
    it('Deve ser uma função', () => {
        expect(typeof getToken).toEqual('function');
    })

    it('Deve chamar a função "fetch"', () => {
        getToken();
        expect(fetch).toHaveBeenCalled();
    })

    it('Deve retornar o o token de acesso', async () => {
        const response = await getToken();
        expect(response).toEqual(getTokenResponse.access_token);
    })
});

describe('A função "FetchAnimals" deve funcionar corretamente', () => {
    it('Deve ser uma função', () => {
        expect(typeof fetchAnimals).toEqual('function');
    })

    it('Deve chamar a função "fetch"', () => {
        fetchAnimals('cat');
        expect(fetch).toHaveBeenCalled();
    })

    it('Deve retornar o objeto esperado', async () => {
        const response = await fetchAnimals('dog');
        expect(response).toEqual(fetchAnimalsResponse);
    })
});

describe('A função "FetchPet" deve funcionar corretamente', () => {
    it('Deve ser uma função', () => {
        expect(typeof fetchPet).toEqual('function');
    })

    it('Deve chamar a função "fetch"', () => {
        fetchPet(124);
        expect(fetch).toHaveBeenCalled();
    })

    it('Deve retornar o objeto esperado', async () => {
        const response = await fetchPet(124);
        expect(response).toEqual(fetchPetResponse);
    })
});
