import HomePageOdev from "../../pages/HomePageOdev"
import Loginodev from "../../pages/Loginodev"

describe("GoIT,page object model-1.test",function(){

it("TC_01 Page Object Model Ile Test Yazimi",function(){

cy.fixture('odevdata').then(function(expected){

Loginodev.goUrl();
Loginodev.checkemailfield();
Loginodev.checkpasswordfield();
Loginodev.checkloginbutonu();
HomePageOdev.checkmenu();
HomePageOdev.checkcikis();

});

});

});