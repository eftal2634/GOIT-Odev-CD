describe('yedinci testimiz', () => {
  it("tc07_get istegi", () => {
    const rq = {
      method: 'get',
      url: "https://evilinsult.com/generate_insult.php?lang=en&type=json",
    };

    cy.request(rq).then((response) => {
     

      assert.equal(response.status,"200");    
      
      

    });
  });
});