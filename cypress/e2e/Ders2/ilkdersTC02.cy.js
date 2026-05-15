describe('ilk ödevimiz',function(){

it("TC02 ilk test senaryosu",function(){

    cy.visit("https://www.edu.goit.global/account/login")
    cy.get('#user_email').type("testowyqa@qa.team")
    cy.get('#user_password').type("QA!automation-1")
    cy.get('.next-1jphuq5').click()
    cy.get('#open-navigation-menu-mobile').click()
    cy.get(':nth-child(9) > .next-bve2vl').click()

})

})