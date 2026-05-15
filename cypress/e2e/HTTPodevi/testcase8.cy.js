describe('sekizinci testimiz', () => {
  it("tc08_get istegi", () => {
    const rq = {
      method: 'get',
      url: "https://data.jsdelivr.com/v1/",
      failOnStatusCode: false
    };

    cy.request(rq).then((response) => {
   
      assert.equal(response.status, "400");
      

    });
  });
});