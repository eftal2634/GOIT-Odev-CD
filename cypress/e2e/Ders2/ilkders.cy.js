describe('ilk ödevimiz',function(){

it("TC01 ilk test senaryosu",function(){

    cy.visit("https://www.edu.goit.global/account/login")
    cy.get('#user_email').type("user888@gmail.com")
    cy.get('#user_password').type("1234567890")
    cy.get('.next-1jphuq5').click()
    cy.get('#open-navigation-menu-mobile').click()
    cy.get(':nth-child(12) > .next-bve2vl').click()

})

})









