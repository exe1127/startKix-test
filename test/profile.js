const login = require("../function/login-inicial");
const myProfile = require("../function/profile-option");
const myCollection = require("../function/myCollection");
Feature('options profiles')
Scenario('test profiles', ({ I }) => {
    login(I);
    I.wait(2);
    I.tap('~Profile, tab, 4 of 4');
    I.wait(2);
    // myProfile(I);
    // myCollection(I);
    
    pause();
})