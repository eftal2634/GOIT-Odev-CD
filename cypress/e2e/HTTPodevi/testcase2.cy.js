describe('ikinci testimiz', () => {
  it("tc02_get istegi", () => {
    const rq = {
      method: 'get',
      url: "https://dog.ceo/api/breeds/image/random",
      
    };

    cy.request(rq).then((response) => {
   
    expect(response.body.status).to.equal("success");
    
    
    });
  });
});
