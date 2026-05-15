describe('ilk testimiz', () => {
  it("tc01_get istegi", () => {
    const rq = {
      method: 'get',
      url: "https://placebear.com/g/200/300",
      
    };

    cy.request(rq).then((response) => {
   
      assert.equal(response.status, 200);
      cy.log("response statusText ::::::::::",JSON.stringify(response.statusText));

      
    });
  });
});




    





























































