class Login {

url="https://www.edu.goit.global/account/login";
username='#user_email';
password='#user_password';
loginbutton='.next-1jphuq5';


goUrl(){
    cy.visit(this.url);
}

checkemailfield(){

    cy.get(this.username).should("be.visible").type('user888@gmail.com');
}

checkpasswordfield(){

cy.get(this.password).should("be.visible").type('1234567890');

}

checkloginbutonu(){

cy.get(this.loginbutton).should("be.visible").click();

}}
export default new Login()