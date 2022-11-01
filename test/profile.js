const login = require("../function/login-inicial");
const { myProfile, myCollection, myOrders, suport, settings } = require("../function/profile-option");

Feature('options profiles')
Scenario('test profiles', ({ I }) => {
    login(I);
    I.wait(2);
    I.tap('~Profile, tab, 4 of 4');
    I.wait(2);
    // myProfile(I);
    // myCollection(I);
    // myOrders(I);
    // suport(I);
    // settings(I);
    pause();
})