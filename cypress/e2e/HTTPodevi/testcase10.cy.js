describe('onuncu testimiz', () => {
  it("tc010_get istegi", () => {
    const rq = {
      method: 'get',
      url: "https://www.disify.com/api/email/your@example.com",
      failOnStatusCode: false
    };

    cy.request(rq).then((response) => {
   
      assert.equal(response.status, "200");
      

    });
  });
});