import { fetchCharacters, fetchQuotes } from "./fetch-utils.js";

test('gets all quotes', async() => {
    const expectation = {
        id: expect.any(Number),
        character_name: expect.any(String),
        quote: expect.any(String),
        character_id: expect.any(Number),
        img: expect.any(String)
    };

    const response = await fetchQuotes();

    expect(response[0]).toEqual(expectation);
})

test('gets all characters', async() => {
    const expectation = {
        age: expect.any(String),
        id: expect.any(Number),
        character_name: expect.any(String),
        character_id: expect.any(Number),
        gem_type: expect.any(String),
        weapon: expect.any(String),
        species: expect.any(String),
        img: expect.any(String)
    };

    const response = await fetchCharacters();

    expect(response[0]).toEqual(expectation);
})

// test('gets one character', async() => {
//     const expectation = {
//         age: expect.any(String),
//         id: expect.any(Number),
//         character_name: expect.any(String),
//         character_id: expect.any(Number),
//         gem_type: expect.any(String),
//         weapon: expect.any(String),
//         species: expect.any(String),
//         img: expect.any(String)
//     };

//     const response = await fetchCharacters();

//     expect(response[0]).toEqual(expectation);
// })