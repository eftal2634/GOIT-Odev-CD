class Login2 { 

    url="https://www.edu.goit.global/account/login";
    username='#user_email';
    password='#user_password';
    loginbutton='.next-1jphuq5'

   urlgo(){
    cy.visit(this.url)
   }

   checkemail(){

    cy.get(this.username).should("be.visible").type('testowyqa@qa.team');

   }
   
   checkpassword(){

   cy.get(this.password).should("be.visible").type('QA!automation-1');

   }
  
   checkloginbutton(){

  cy.get(this.loginbutton).should("be.visible").click();

   }}
export default new Login2()