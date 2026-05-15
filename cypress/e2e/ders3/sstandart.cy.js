

describe("Standart test yazımı",function(){

it("TC01_standarttest",function(){
//1.url e git
cy.visit("https://www.edu.goit.global/account/login")
//2.Title görünür olup olamdığını kontol et ve textin Login olup olmadığını kontrol et
cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login")
//.email alanının görünür olup olmadığını ve var olup olmadığını kontrol et
cy.get('#user_email').should("be.visible").and("exist")
//password alanının görünür olup olmadığını ve var olup olmadığını kontrol et
cy.get('#user_password').should("be.visible").and("exist")
//Login butonunun görünür olup olmadığını kontrol et ve var olup olmadığını kontol et
cy.get('.next-1jphuq5').should("be.visible").and("exist")
// I can't remember the password alanının görünür olup olmadığını ve textin I can't remember the password e eşit olduğunu kontrol et
cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text","I can't remember the password")

})

})