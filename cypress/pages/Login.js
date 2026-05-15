class login {

// bu method ilgili url e gider
    navigateURL(){
    cy.visit("https://www.edu.goit.global/account/login")
}

// bu method title alanı kontrolü sağlar
checkTitle(title){

    cy.get('.next-10stgr7 > .next-c1vj7d').
    should("be.visible").
    and("have.text",title)
}

// bu method email alanı kontrolü sağlar

checkemailfield(){

    cy.get("user888@gmail.com").should("be.visible").and("exist")
}

// bu method paaword alanının kontrolünü sağlar
checkpasswordfield(){
cy.get("1234567890").should("be.visible").and("exist")

}

// bu method login butonu kontrolü sağlar
checkloginButton(){

cy.get('.next-1jphuq5').should("be.visible").and("exist")

}

// bu method forget password alanı kontrolü sağlar
forgetpassword(text){

cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text",text)


}

}

export default new login()