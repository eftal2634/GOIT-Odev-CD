

class Anasayfa {

loginmenu='#open-navigation-menu-mobile';
logincikis=':nth-child(12) > .next-bve2vl';



checkmenu(){

cy.get(this.loginmenu).should("exist").click();


}

checkcikis(){


cy.get(this.logincikis).click();
}

}

export default new Anasayfa();