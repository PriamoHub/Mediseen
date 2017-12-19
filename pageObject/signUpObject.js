"use strict";
var Page = require('../util/page.js')
var config = require('../wdio.conf.js').config

class signUpObject extends Page {

    set email(v)             {        $("[ng-model='profile.email']").setValue(v); }
    set password(v)          {        $("[ng-model='profile.password']").setValue(v); }
    set confirmPassword(v)   {        $("[ng-model='profile.password_confirmed']").setValue(v); }
    set name(v)              {        $("[ng-model='profile.first_name']").setValue(v);}
    set lastName(v)          {        $("[ng-model='profile.last_name']").setValue(v);}
    set birthDate(v)         {        $("[ng-model='profile.birthday']").setValue(v);}
    set phone(v)             {        $("[ng-model='profile.phone']").setValue(v);}

    set street(v)             {        $("[ng-model='profile.address.street']").setValue(v);}
    set city(v)               {        $("[ng-model='profile.address.city']").setValue(v);}
    set province(v)           {        $("[ng-model='profile.address.province']").setValue(v);}
    set country(v)            {        $("[ng-model='profile.address.country']").setValue(v);}

    set emergencyContact(v)   {        $("[ng-model='profile.emergency_contact_name']").setValue(v);}
    set emergencyPhone(v)     {        $("[ng-model='profile.emergency_contact_phone']").setValue(v);}
    set relation(v)            {        $("[ng-model='profile.emergency_contact_relationship']").setValue(v);}

    clickGender(){
      browser.click("[for='male']");
    }

    signIn() {
        browser.click("[ng-click='login()']");
    }
    signUp() {
      super.open('app#!/sign-up');

    }
    forgotPassword()
    {
      browser.click("[ui-sref='password']");
    }
    terms()
    {
      browser.click("[ng-model='terms']");
    }
    emails()
    {
      browser.click("[ng-model='emails']");
    }
    continueSignUp()
    {
      browser.click("[ng-click='register()']");
    }

}
module.exports = new signUpObject();
