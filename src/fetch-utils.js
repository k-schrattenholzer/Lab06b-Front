import request from "superagent"

const URL = 'https://katie-lab06b.herokuapp.com'

export async function fetchQuotes() {
   const response = await request.get(`${URL}/quotes`);

   return response.body;
}

export async function fetchCharactersList() {
   const response = await request.get(`${URL}/characters`);

   return response.body;
}

export async function fetchCharacterInfo() {
   const response = await request.get(`${URL}/character-info`);

   return response.body;
}

export async function fetchSingleCharacter(id) {
   const response = await request.get(`${URL}/character-info/${id}`);

   return response.body;
}

export async function fetchSingleQuote(id) {
   const response = await request.get(`${URL}/quotes/${id}`);

   return response.body;
}

export async function deleteQuote(id) {
   const response = await request.delete(`${URL}/quotes/${id}`);

   return response.body;
}

export async function deleteCharacter(id) {
   const response = await request.delete(`${URL}/character-info/${id}`);

   return response.body;
}

export async function updateCharacter(id, newCharacter) {
   const response = await request.put(`${URL}/character-info/${id}`)
   .send(newCharacter);

   return response.body;
}

export async function updateQuote(id, newQuote) {
   const response = await request.put(`${URL}/quotes/${id}`)
   .send(newQuote);

   return response.body;
}

export async function createQuote(newQuote) {
   const response = await request.post(`${URL}/quotes`)
   .send(newQuote);

   return response.body;
}

