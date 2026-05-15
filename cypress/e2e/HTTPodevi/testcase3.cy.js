describe('ucuncu testimiz', () => {
  it("tc03_post istegi", () => {
    const rq = {
      method: 'post',
      url:"http://colormind.io/api/",
      body: {model:"default"},
      
    };

    cy.request(rq).then((response) => {
    
     expect(response.body).to.have.property('result');
      
    });
  });
});
