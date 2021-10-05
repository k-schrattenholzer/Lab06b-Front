import request from "superagent"

export async function fetchQuotes() {
   const response = await request.get('https://katie-lab06b.herokuapp.com/quotes');

   return response.body;
}

export async function fetchCharacters() {
   const response = await request.get('https://katie-lab06b.herokuapp.com/character-info');

   return response.body;
}