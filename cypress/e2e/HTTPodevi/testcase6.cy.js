describe('altinci testimiz', () => {
  it("tc06_get istegi", () => {
    const rq = {
      method: 'get',
      url: "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    };

    cy.request(rq).then((response) => {
      assert.equal(response.body[0].license.name, "CC BY-SA 3.0");

      assert.equal(response.body[0].word, "hello");
    

    });
  });
});