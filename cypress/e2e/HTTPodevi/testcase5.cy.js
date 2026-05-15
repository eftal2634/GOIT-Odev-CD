describe('besinci testimiz', () => {
  it("tc05_get istegi", () => {
    const rq = {
      method: 'get',
      url: "https://tenders.guru/api/pl/tenders?",
      qs: {
        page: 2
      }
     }
     
    cy.request(rq).then((response) => {
   
      assert.equal(response.body.page_size,"100");
      assert.equal('5968',response.body['page_count']);
    
    });

  });
});