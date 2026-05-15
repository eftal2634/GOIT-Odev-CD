
import Homepageodev2 from "../../pages/Homepageodev2";
import Loginodev2 from "../../pages/Loginodev2";

describe("GoIT,page object model-2.test",function(){

it("TC_02 Page Object Model Ile Test Yazimi",function(){

cy.fixture('odevdata1').then(function(expected){

Loginodev2.urlgo();
Loginodev2.checkemail();
Loginodev2.checkpassword();
Loginodev2.checkloginbutton();
Homepageodev2.menufield();
Homepageodev2.gocikis();

});

});

});