const login = require("../function/login-inicial");

Feature('options profiles')
Scenario('test Skip- search participant', ({ I }) => {
    login(I);
    I.wait(2);
    I.tap('~Profile, tab, 4 of 4');
    I.wait(2);
    pause();
})