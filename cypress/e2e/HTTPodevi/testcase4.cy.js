describe('dorduncu testimiz', () => {
  it("tc04_get istegi", () => {
    const rq = {
      method: 'get',
      url:"https://jsonplaceholder.typicode.com/todos/1",
     
     }

    cy.request(rq).then((response) => {
   
      assert.equal(response.status, 200);
      
    });

  });
});
