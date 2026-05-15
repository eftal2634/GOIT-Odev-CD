
import Login from "../../pages/Login";
describe("page object model-pom",function(){

it("TC02_pageobjectpattern",function(){

    Login.navigateURL()
    Login.checkTitle("Login")
    Login.checkEmailField()
    Login.checkPasswordField()
    Login.checkLoginButton()
    Login.forgetpassword("I can't remember the password")

})

})