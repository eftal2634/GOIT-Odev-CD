class Anasayfa2{

    menu='#open-navigation-menu-mobile';
    cikis=':nth-child(9) > .next-bve2vl';

    menufield(){

        cy.get(this.menu).should("exist").click();
    }

   gocikis(){

    cy.get(this.cikis).should("be.visible").click();

   }


}
export default new Anasayfa2()