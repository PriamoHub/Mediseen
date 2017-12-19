var expect = require('chai').expect;
var loginObject = require("../pageObject/loginObject.js");
var signUpObject = require("../pageObject/signUpObject.js");
var webdriverio = require('webdriverio');
var config = require('../wdio.conf.js').config

/* var webdriverio =
    client = webdriverio.remote({
        desiredCapabilities: {
			name : 'Webdriverio Test',
			build :  '1.0',

			screen_resolution : '1024x768',
			record_video : "true",
			record_network : "true",
			record_snapshot :  "false",

			browserName : "firefox, safari, chrome",
			username : "priamo.ramirez@testlauncher.com",
			password : "u59834cd1b764544"
        },
        host: 'hub.crossbrowsertesting.com',
        port: 80,
        user: "priamo.ramirez@testlauncher.com",
        key: "u59834cd1b764544",
        logLevel: 'silent',

}).init();
*/

describe('Mediseen - Login Automated Testing', function () {

  /*      it('Login with correct Email and Password', function () {
            loginObject.username = "priamo.ramirez+pacprod@testlauncher.com";
            loginObject.password = "B36i18e%";
            loginObject.signIn(); */

            it('Sign Up', function () {
                      signUpObject.signUp();
                      signUpObject.email = "priamo.ramirez+pacprod@testlauncher.com";
                      signUpObject.password = "B36i18e%";
                      signUpObject.confirmPassword = "B36i18e%";
                      signUpObject.name = "Priamo";
                      signUpObject.lastname = "Ramirez";
                      signUpObject.birthDate = "12/12/2000";
                      signUpObject.phone = "8093457845";

                      signUpObject.clickGender();
                      signUpObject.terms();
                      signUpObject.emails();
                      signUpObject.continueSignUp();



        });

    });
