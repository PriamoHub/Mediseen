"use strict";
var Page = require('../util/page.js')

class loginObject extends Page {

    get email()              { return $("[ng-model='email']").getValue(); }
    set email(v)             {        $("[ng-model='email']").setValue(v); }
    get password()              { return $("[ng-model='password']").getValue(); }
    set password(v)             {        $("[ng-model='password']").setValue(v); }

    signIn() {
        browser.click("[ng-click='login()']");
    }
    signUp() {
        browser.click("[href='#!/sign-up'][ui-sref='signUp']");
    }
    forgotPassword()
    {
      browser.click("[ui-sref='password']");
    }

}
module.exports = new loginObject();
