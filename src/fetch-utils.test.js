import { fetchQuotes } from "./fetch-utils.js";

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